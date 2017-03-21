import { createPerson } from 'redux/person';

export const onCreate = values => (dispatch) => {
  console.log(values);
  return dispatch(createPerson(values)).then((resp) => {
    console.log(resp);
  });
};
