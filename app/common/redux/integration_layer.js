
import * as fromDeclarations from 'redux/declarations';
import * as fromPersons from 'redux/person';
import * as fromDoctors from 'redux/doctor';
import * as fromMsps from 'redux/msps';

export const fetchDeclaration = id => dispatch =>
  dispatch(fromDeclarations.fetchDeclaration(id))
  .then(declaration => Promise.all([
    dispatch(fromDoctors.fetchDoctor(declaration.doctor_id)),
    dispatch(fromPersons.fetchPerson(declaration.patient_id)),
    dispatch(fromMsps.fetchMSPS()),
  ]));
