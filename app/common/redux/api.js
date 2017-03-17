import { CALL_API } from 'redux-api-middleware';

export const invoke = (config, { auth = false } = {}) => (dispatch) => {
  // const state = getState();
  const result = { ...config };

  result.headers = {
    'content-type': 'application/json',

  };
  // ...result.headers,
  // 'authorization': 'Bearer YW5WcFkyVnFkV2xqWldwMWFXTmxDZzpjY1hwWTR0cWRZbGVjNHAxYUdsMXVJ',

  if (typeof result.body !== 'string') {
    result.body = JSON.stringify(result.body);
  }
  if (auth) {
    // const token = getToken(state);
    result.headers = {
      ...result.headers,
      // token,
    };
  }
  return dispatch({
    [CALL_API]: result,
  });
};
