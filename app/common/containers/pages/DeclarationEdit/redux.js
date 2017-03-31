import { handleActions, createAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { personFormValueToApiModel } from 'helpers/transforms';

import { show } from 'components/Popup';
import { fetchMSPS } from 'redux/msps';
import { createPerson } from 'redux/person';
import { createDeclaration, closeDeclaration } from 'redux/declarations';
import { sendLookup, sendLookupConfirm } from 'redux/sms';

const saveRequestId = createAction('DeclarationEdit/SAVE_REQUEST_ID');

export const onDataFormSubmit = formData => dispatch =>
  dispatch(sendLookup({
    phone_number: `+38${formData.phones.MOBILE.number}`,
  }))
    .then(response => dispatch([
      saveRequestId(response.payload.request_id),
      show('lookupConfirm'),
    ]));

export const onLookupSubmit = (requestId, code, formData, declarationId) => dispatch =>
  dispatch(sendLookupConfirm(requestId, code))
    .then((action) => {
      if (action.error) throw dispatch(show('verifyLookupFailure'));
      return action;
    })
    .then(() => dispatch(onCreateDeclaration(formData, declarationId)))
    .then((action) => {
      if (action.error) throw dispatch(show('declarationCreateFailure'));
      return dispatch(closeDeclaration(declarationId)).then(() =>
        dispatch(show('declarationCreateSuccess')));
    });

export const onCreateDeclaration = values => dispatch =>
  dispatch(createPerson(personFormValueToApiModel(values))).then(patient =>
    dispatch(fetchMSPS()).then(mspObj =>
      dispatch(createDeclaration({
        declaration: {
          start_date: new Date().toJSON(),
          end_date: (new Date(new Date().setFullYear(new Date().getFullYear() + 1))).toJSON(),
          doctor_id: values.doctor,
          msp_id: mspObj.payload.result[0],
          patient_id: patient.payload.result,
          status: 'pending_signature',
          scope: 'family_doctor',
        },
      }))
    )
  );


const requestId = handleActions({
  [saveRequestId]: (state, action) => action.payload,
}, null);

export default combineReducers({
  requestId,
});
