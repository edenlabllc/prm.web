import { createPerson } from 'redux/person';

export const onCreate = values => (dispatch, getState) => {
  const state = getState();
  console.log(values, state);
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
  console.log(obj);
  return dispatch(createPerson(obj)).then((resp) => {
    console.log(resp);
  });
};
