import { handleActions, createAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { searchPersons } from 'redux/person';


const setCurrentPerson = createAction('person/SET_CURRENT_PERSON');

export const onSubmit = values => (dispatch) => {
  console.log((new Date(values.birth_date)).toJSON());

  const body = {
    ...values,
    birth_date: (new Date(values.birth_date)).toJSON(),
    phones: {
      type: 'MOBILE',
      number: values.phones ? `+38${values.phones.number}` : null,
    },
  };
  console.log(body);
  dispatch(setCurrentPerson(body));
  return dispatch(searchPersons(body)).then((resp) => {
    console.log(resp);
  });
};

const currentPerson = handleActions({
  [setCurrentPerson]: (state, action) => action.payload,
}, []);

export default combineReducers({
  currentPerson,
});
