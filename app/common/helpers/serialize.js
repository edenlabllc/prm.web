export const serialize = (obj) => {
  const str = [];
  Object.keys(obj).forEach((key) => {
    const obj = obj[key];
    str.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
  });
  return str.join('&');
};
