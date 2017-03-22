import { handleActions, createAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { searchPersons } from 'redux/person';

import { show } from 'components/Popup';

const setCurrentPerson = createAction('person/SET_CURRENT_PERSON');
const setCurrentPersonsList = createAction('person/SET_CURRENT_PERSONS_LIST');

export const onSubmit = values => (dispatch) => {
  const body = {
    ...values,
    birth_date: (new Date(values.birth_date)).toJSON(),
    phones: [{
      type: 'MOBILE',
      number: values.phones ? `+38${values.phones.number}` : null,
    }],
  };

  dispatch(setCurrentPerson(body));
  return dispatch(searchPersons(body)).then((resp) => {
    if (resp.payload.result.length !== 0) {
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
