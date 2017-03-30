import { API_URL } from 'config';

import { invoke } from './api';

export const sendLookup = phoneNumber => dispatch => dispatch(invoke({
  endpoint: `/${API_URL}/sms/verify`,
  method: 'post',
  types: [
    'sms/SEND_LOOKUP_REQUEST',
    'sms/SEND_LOOKUP_SUCCESS',
    'sms/SEND_LOOKUP_FAILURE',
  ],
  body: phoneNumber,
}));

export const sendLookupConfirm = (request_id, code) => dispatch => dispatch(invoke({
  endpoint: `${API_URL}/sms/verify/${request_id}/check`,
  method: 'post',
  types: [
    'sms/VERIFY_LOOKUP_REQUEST',
    'sms/VERIFY_LOOKUP_SUCCESS',
    'sms/VERIFY_LOOKUP_FAILURE',
  ],
  body: code,
}));
