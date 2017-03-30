import { handleActions, createAction } from 'redux-actions';
import { combineReducers } from 'redux';

export const reset = createAction('createDeclaration/RESET');
export const saveDeclaration = createAction('createDeclaration/SAVE_DECLARATION');
export const savePerson = createAction('createDeclaration/SAVE_PERSON');

const declaration = handleActions({
  [reset]: () => null,
  [saveDeclaration]: (state, action) => ({
    ...state || {},
    ...action.payload || {},
  }),
}, null);

const person = handleActions({
  [reset]: () => null,
  [savePerson]: (state, action) => ({
    ...state || {},
    ...action.payload || {},
  }),
}, null);

export default combineReducers({
  declaration,
  person,
});
