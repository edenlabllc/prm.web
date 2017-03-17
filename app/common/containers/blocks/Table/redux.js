import { fetchDeclarations } from 'redux/declarations';
import { fetchPatient } from 'redux/patient';
import { fetchDoctor } from 'redux/doctor';


export const getDeclarationList = () => dispatch =>
  dispatch(fetchDeclarations()).then((resp) => {
    if (resp.error) return null;
    return resp.payload.result.map(i =>
      dispatch(Promise.all([
        fetchPatient(resp.payload.entities.declarations[i].patient_id),
        fetchDoctor(resp.payload.entities.declarations[i].doctor_id),
      ])));
  });
