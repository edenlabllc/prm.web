import { fetchPerson } from 'redux/person';
import { serialize } from 'helpers/serialize';


export const onSubmit = values => (dispatch) => {
  console.log('values ', values);
  return dispatch(fetchPerson(serialize(values))).then((resp) => {
    console.log(resp);
  });
};
