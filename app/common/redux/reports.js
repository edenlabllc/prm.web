import { PRM_URL } from 'config';
import { handleAction, combineActions } from 'redux-actions';
import { normalize, Schema, arrayOf } from 'normalizr';
import { createUrl } from 'helpers/url';

import { invoke } from './api';

const reportsSchema = new Schema('reports');

export const fetchReportsDeclations = options => dispatch => dispatch(invoke({
  endpoint: createUrl(`${PRM_URL}/reports/declarations`, options),
  method: 'get',
  types: [
    'reports/REPORTS_DECRATION_REQUEST', {
      type: 'reports/REPORTS_DECLARATION_SUCCESS',
      payload: (action, state, res) => res.json().then(json =>
        normalize(json.data, arrayOf(reportsSchema))),
    },
    'reports/REPORTS_DECLARATION_FAILER',
  ],
}));

const reports = handleAction(
  combineActions(
    'reports/REPORTS_DECLARATION_SUCCESS'
  ),
  (state, action) => ({
    ...state,
    ...action.payload.entities.reports,
  }),
  {}
);

export default reports;
