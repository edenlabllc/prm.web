
export const objectToArrayWithType = (obj = {}, { typeKey = 'type' } = {}) =>
  Object.entries(obj).map(([key, value]) => ({
    [typeKey]: key,
    ...value,
  }));
