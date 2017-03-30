
import * as fromDeclarations from 'redux/declarations';
import * as fromPersons from 'redux/person';
import * as fromDoctors from 'redux/doctor';
import * as fromMsps from 'redux/msps';

export const fetchDeclaration = id => (dispatch, getState) =>
  dispatch(fromDeclarations.fetchDeclaration(id))
  .then(() => {
    const state = getState();
    const declaration = state.declarations[id];
    return Promise.all([
      dispatch(fromDoctors.fetchDoctor(declaration.doctor_id)),
      dispatch(fromPersons.fetchPerson(declaration.patient_id)),
      dispatch(fromMsps.fetchMSP(declaration.msp_id)),
    ]);
  });
