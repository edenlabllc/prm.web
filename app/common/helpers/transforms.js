
export const objectToArrayWithType = (obj = {}, { typeKey = 'type' } = {}) =>
  Object.entries(obj).map(([key, value]) => ({
    [typeKey]: key,
    ...value,
  }));

export const arrayWithTypeToObject = (array = [], { typeKey = 'type' } = {}) =>
  array.reduce((prev, cur) => ({
    ...prev,
    [cur[typeKey]]: cur,
  }), {});
