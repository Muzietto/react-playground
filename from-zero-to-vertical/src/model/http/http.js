const defaultMode = 'cors';
const BASE_URL = '/api';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const request = (
  method,
  url,
  body,
  additionalHeaders = {}
) => {
  // boolean withCredentials is sent here inside additionalHeaders
  const { mode, ...otherHeaders } = additionalHeaders;
  return new Promise((resolve, reject) => {
    window
      .fetch(`${BASE_URL}${url}`, {
        method,
        headers: Object.assign({}, headers, otherHeaders),
        mode: mode ? mode : defaultMode,
        body: body ? JSON.stringify(body) : undefined,
      })
      .then(response => {
        response.text()
          .then(text => {
            const data = JSON.parse(text);
            resolve({
              data,
              status: response.status,
              headers: response.headers,
            });
          });
      })
      .catch(error => {
        reject({
          message: error.message,
          status: error.status,
          bodyPromise: error.bodyPromise,
        });
      });
  });
};

const get = (url, additionalHeaders) => request('GET', url, null, additionalHeaders);
const post = (url, body, additionalHeaders) => request('POST', url, body, additionalHeaders);
const put = (url, body, additionalHeaders) => request('PUT', url, body, additionalHeaders);

export default {
  request,
  get,
  post,
  put,
};
