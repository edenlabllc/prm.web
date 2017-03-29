import { handleActions, createAction } from 'redux-actions';

export const resetDeclaration = createAction('createDeclaration/RESET');
export const saveData = createAction('createDeclaration/SAVE_DATA');

export default handleActions({
  [resetDeclaration]: () => {},
  [saveData]: (state, action) => ({
    ...state,
    ...action.payload || {},
  }),
}, {});
