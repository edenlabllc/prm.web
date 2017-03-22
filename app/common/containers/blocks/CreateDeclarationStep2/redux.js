import { fetchMSPS } from 'redux/msp';
import { createPerson } from 'redux/person';
import { createDeclaration } from 'redux/declarations';

export const onCreate = values => (dispatch, getState) => {
  const state = getState();
  const doctor_id = values.doctor;

  const obj = {
    ...state.blocks.CreateDeclarationStep1.currentPerson,
    gender: 'MALE',
    documents: [{
      type: 'PASSPORT',
      number: values.documents.number,
      issue_date: (new Date(values.documents.issue_date)).toJSON(),
      issue_by: values.documents.issued_by,
    }],
    addresses: [{
      type: 'REGISTRATION',
      country: 'UA',
      area: values.REGISTRATION.addresses.area,
      city: values.REGISTRATION.addresses.city,
      street: values.REGISTRATION.addresses.street,
      building: values.REGISTRATION.addresses.building,
      apartment: values.REGISTRATION.addresses.apartment,
      zip: values.REGISTRATION.addresses.zip,
    }],
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
          patient_id: person_id,
          doctor_id,
          msp_id,
          scope: 'family_doctor',
          status: 'pending_signature',
          start_date,
          end_date,
        },
      };

      dispatch(createDeclaration(obj)).then((resp) => {
        console.log(resp);
      });
    });
  });
};
