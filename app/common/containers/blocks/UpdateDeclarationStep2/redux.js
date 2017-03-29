import { fetchMSPS } from 'redux/msps';
import { createPerson } from 'redux/person';
import { createDeclaration, closeDeclaration } from 'redux/declarations';
import { push } from 'react-router-redux';
import { objectToArrayWithType } from 'helpers/transforms';

export const redirectToFirstStepIfDataIsNotExist = () => (dispatch, getState) => {
  const state = getState();
  const firstStepData = state.flows.createDeclaration.person;
  if (firstStepData) return true;
  return dispatch(push('/declaration'));
};

export const onCreate = values => (dispatch, getState) => {
  const state = getState();
  const doctor_id = values.doctor;
  const current_declarationID = state.flows.createDeclaration.declaration.id;

  const addresses = objectToArrayWithType(values.addresses).map(value => ({
    country: 'UA',
    ...value,
  }));

  const obj = {
    ...state.flows.createDeclaration.person,
    gender: values.gender,
    documents: [{
      type: 'PASSPORT',
      number: values.documents.number,
      issue_date: (new Date(values.documents.issue_date)).toJSON(),
      issue_by: values.documents.issued_by,
    }],
    addresses,
  };


  return dispatch(createPerson(obj)).then((newPatient) => {
    const patientsObj = newPatient.payload.entities.persons;
    const person_id = patientsObj[Object.keys(patientsObj)[0]].id;

    dispatch(fetchMSPS()).then((mspObj) => {
      const mspsObj = mspObj.payload.entities.msps;
      const msp_id = mspsObj[Object.keys(mspsObj)[0]].id;

      const start_date = new Date().toJSON();
      const end_date = (new Date(new Date().setFullYear(new Date().getFullYear() + 1))).toJSON();

      const obj = {
        declaration: {
          start_date,
          doctor_id,
          end_date,
          msp_id,
          patient_id: person_id,
          status: 'pending_signature',
          scope: 'family_doctor',
        },
      };

      return Promise.all([
        dispatch(createDeclaration(obj)),
        dispatch(closeDeclaration(current_declarationID)),
      ]);
    });
  });
};
