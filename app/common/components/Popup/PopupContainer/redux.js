import { createAction, handleActions } from 'redux-actions';

const showAction = createAction('popup/SHOW');

export const show = (...args) => dispatch => dispatch([
  hideAll(),
  showAction(...args),
]);
export const hide = createAction('popup/HIDE');
export const hideAll = createAction('popup/HIDE_ALL');

export const getPopup = (state, name) => state[name];

export default handleActions({
  [showAction]: (state, action) => ({
    ...state,
    [action.payload]: {
      ...state[action.payload],
      active: true,
    },
  }),
  [hide]: (state, action) => ({
    ...state,
    [action.payload]: {
      ...state[action.payload],
      active: false,
    },
  }),
  [hideAll]: state => Object.keys(state).reduce((cur, i) => ({
    ...cur,
    [i]: {
      ...state[i],
      active: false,
    },
  }), {}),
}, {});
