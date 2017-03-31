import pickFn from 'lodash/pick';

export const objectToArrayWithType = (obj = {}, { typeKey = 'type' } = {}) =>
  (Object.entries(obj) || []).map(([key, value]) => ({
    [typeKey]: key,
    ...value,
  }));

export const arrayWithTypeToObject = (array = [], { typeKey = 'type' } = {}) =>
  array.reduce((prev, cur) => ({
    ...prev,
    [cur[typeKey]]: cur,
  }), {});

export const personFormValueToApiModel = values => ({
  ...pickFn(values, [
    'first_name',
    'last_name',
    'second_name',
    'gender',
    'birth_date',
    'birth_place',
    'national_id',
    'email',
    'secret',
  ]),
  documents: objectToArrayWithType(values.documents).map(value => ({
    ...value,
    issue_date: (new Date(value.issue_date)).toJSON(),
  })),
  addresses: objectToArrayWithType(values.addresses).map(value => ({
    country: 'UA',
    ...value,
  })),
  phones: objectToArrayWithType(values.phones).map(value => ({
    ...value,
    number: value.number && `+38${value.number}`,
  })),
  confident_persons:
    (values.confident_persons || []).map(value => personFormValueToApiModel(value)),
});
