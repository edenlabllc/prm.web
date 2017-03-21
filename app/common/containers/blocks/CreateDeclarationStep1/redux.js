import { searchPersons } from 'redux/person';

export const onSubmit = values => (dispatch) => {
  console.log((new Date(values.birth_date)).toJSON());
  const body = {
    ...values,
    birth_date: (new Date(values.birth_date)).toJSON(),
    'phones.mobile': values.phones ? `+38${values.phones.mobile}` : null,
  };

  console.log(body);

  return dispatch(searchPersons(body)).then((resp) => {
    console.log(resp);
  });
};
