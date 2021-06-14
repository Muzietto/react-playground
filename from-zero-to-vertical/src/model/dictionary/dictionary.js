let dictionary = {};

const init = jsonObj => {
  dictionary = { ...jsonObj };
  return Promise.resolve(dictionary);
};

// eslint-disable-next-line no-unused-vars
const _t = i18nKey => {

  const value = null; // return value found in dictionary or i18nKey_NOT_FOUND

  return value;
};

export default {
  init,
  _t,
};
