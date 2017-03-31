import { createAction, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as fromIntegrationLayer from 'redux/integration_layer';

const setDeclarations = createAction('Declarations/SET_DECLARATIONS');

export const getDeclarations = () => dispatch => dispatch(fromIntegrationLayer.getDeclarations())
  .then(resp => dispatch(setDeclarations(resp.payload.result)));

const declarations = handleActions({
  [setDeclarations]: (state, action) => action.payload,
}, []);

export default combineReducers({
  declarations,
});
