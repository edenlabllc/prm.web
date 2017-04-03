
import * as fromDeclarations from 'redux/declarations';
import * as fromPersons from 'redux/person';
import * as fromDoctors from 'redux/doctor';
import * as fromMsps from 'redux/msps';

export const fetchDeclaration = (id, { cache } = {}) => (dispatch, getState) =>
  dispatch(fromDeclarations.fetchDeclaration(id))
  .then(() => {
    const state = getState();
    const declaration = state.declarations[id];
    return Promise.all([
      dispatch(fromDoctors.fetchDoctor(declaration.doctor_id)),
      dispatch(fromPersons.fetchPerson(declaration.patient_id, { cache })),
      dispatch(fromMsps.fetchMSP(declaration.msp_id)),
    ]);
  });

export const getDeclarations = () => dispatch =>
  Promise.all([
    dispatch(fromDeclarations.fetchDeclarations()),
    dispatch(fromDoctors.fetchDoctors()),
    dispatch(fromMsps.fetchMSPS()),
  ]).then(([resp]) => {
    const declarationsEntities = resp.payload.entities.declarations;
    if (resp.error) return null;

    const ids = Object.values(declarationsEntities).reduce((acc, item) => ({
      doctors: acc.doctors.add(item.doctor_id),
      persons: acc.persons.add(item.patient_id),
      msps: acc.msps.add(item.msp_id),
    }),
      { doctors: new Set(), persons: new Set(), msps: new Set() }
    );

    return Promise.all([
      Promise.all([...ids.doctors].map(id => dispatch(fromDoctors.fetchDoctor(id)))),
      Promise.all([...ids.msps].map(id => dispatch(fromMsps.fetchMSP(id)))),
      Promise.all([...ids.persons].map(id => dispatch(fromPersons.fetchPerson(id)))),
    ]).then(() => resp);
  }).catch(err => console.log(err));
