import { handleActions, createAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { push } from 'react-router-redux';
import { objectToArrayWithType } from 'helpers/transforms';

import { show } from 'components/Popup';
import { fetchMSPS } from 'redux/msps';
import { createPerson } from 'redux/person';
import { createDeclaration } from 'redux/declarations';
import { sendLookup, sendLookupConfirm } from 'redux/sms';

const saveRequestId = createAction('CreateDeclarationStep2/SAVE_REQUEST_ID');
const saveFormData = createAction('CreateDeclarationStep2/SAVE_FORM_DATA');

export const redirectToFirstStepIfDataIsNotExist = () => (dispatch, getState) => {
  const state = getState();
  const firstStepData = state.flows.createDeclaration.person;
  if (firstStepData) return true;
  return dispatch(push('/declaration'));
};

export const onDataFormSubmit = formData => (dispatch) => {
  dispatch(saveFormData(formData));
  return dispatch(sendLookup(formData.phone))
  .then(response => dispatch([
    saveRequestId(response.request_id),
    show('lookupConfirm'),
  ]));
};

export const onLookupSubmit = (requestId, code) => (dispatch, getState) => {
  const state = getState();
  const formData = state.blocks.CreateDeclarationStep2.formData;
  return dispatch(sendLookupConfirm(requestId, code))
    .then(() => dispatch(onCreateDeclaration(formData)))
    .then(() => dispatch(show('verifyLookupSuccess')))
    .catch(() => dispatch(show('verifyLookupFailure')));
};

export const onCreateDeclaration = values => (dispatch, getState) => {
  const state = getState();
  const doctor_id = values.doctor;

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

      dispatch(createDeclaration(obj));
    });
  });
};

const requestId = handleActions({
  [saveRequestId]: (state, action) => action.payload,
}, null);

const formData = handleActions({
  [saveFormData]: (state, action) => action.payload,
}, null);

export default combineReducers({
  requestId,
  formData,
});
