import { handleActions, createAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { searchPersons } from 'redux/person';

import { show } from 'components/Popup';
import { objectToArrayWithType } from 'helpers/transforms';

const setCurrentPerson = createAction('person/SET_CURRENT_PERSON');
const setCurrentPersonsList = createAction('person/SET_CURRENT_PERSONS_LIST');

export const onSubmit = values => (dispatch) => {
  const options = {
    ...values,
    birth_date: (new Date(values.birth_date)).toJSON(),
    phones: objectToArrayWithType(values.phones).map(i => ({
      ...i,
      number: i.number && `+38${i.number}`,
    })),
  };

  dispatch(setCurrentPerson(options));
  return dispatch(searchPersons(options)).then((resp) => {
    if (resp.payload.status === 403) {
      return dispatch(show('specifySearchPopup'));
    } else if (resp.payload.result && resp.payload.result.length !== 0) {
      dispatch(setCurrentPersonsList(resp.payload.entities.persons));
      return dispatch(show('searchDeclarationPopup'));
    }
    return dispatch(show('emptySearchPopup'));
  });
};

const currentPerson = handleActions({
  [setCurrentPerson]: (state, action) => action.payload,
}, []);

const currentPersonsList = handleActions({
  [setCurrentPersonsList]: (state, action) => action.payload,
}, []);

export default combineReducers({
  currentPerson,
  currentPersonsList,
});
