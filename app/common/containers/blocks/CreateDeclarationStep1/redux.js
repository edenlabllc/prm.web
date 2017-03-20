import { fetchPatient } from 'redux/patient';
import { serialize } from 'helpers/serialize';


export const onSubmit = values => (dispatch) => {
  console.log('values ', values);
  return dispatch(fetchPatient(serialize(values))).then((resp) => {
    console.log(resp);
  });
};
