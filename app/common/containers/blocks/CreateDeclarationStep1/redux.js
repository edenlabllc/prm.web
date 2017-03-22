import { handleActions, createAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { searchPersons } from 'redux/person';


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

  // dispatch(setCurrentPerson(body));
  return dispatch(searchPersons(body)).then((resp) => {
    console.log(resp);
  });
};

const currentPerson = handleActions({
  [setCurrentPerson]: (state, action) => action.payload,
}, []);

const currentPersonList = handleActions({
  [setCurrentPersonsList]: (state, action) => action.payload,
}, []);

export default combineReducers({
  currentPerson,
  currentPersonList,
});
