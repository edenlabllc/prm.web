import { handleActions, createAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { objectToArrayWithType } from 'helpers/transforms';
import pickFn from 'lodash/pick';

import { show } from 'components/Popup';
import { fetchMSPS } from 'redux/msps';
import { createPerson } from 'redux/person';
import { createDeclaration, closeDeclaration } from 'redux/declarations';
import { sendLookup, sendLookupConfirm } from 'redux/sms';

const saveRequestId = createAction('DeclarationEdit/SAVE_REQUEST_ID');

export const onDataFormSubmit = formData => dispatch =>
  dispatch(sendLookup(formData.phone))
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
  dispatch(createPerson({
    ...pickFn(values, [
      'first_name',
      'last_name',
      'second_name',
      'gender',
      'birth_date',
      'birth_place',
    ]),
    documents: [{
      type: 'PASSPORT',
      number: values.documents.number,
      issue_date: (new Date(values.documents.issue_date)).toJSON(),
      issue_by: values.documents.issued_by,
    }],
    addresses: objectToArrayWithType(values.addresses).map(value => ({
      country: 'UA',
      ...value,
    })),
  })).then(patient =>
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
