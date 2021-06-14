let dictionary = {};

const init = jsonObj => {
  dictionary = { ...jsonObj };
  return Promise.resolve(dictionary);
};

// eslint-disable-next-line no-unused-vars
const _t = i18nKey => {

  const value = dictionary[i18nKey]
    ? dictionary[i18nKey]
    : `${i18nKey}_NOT_FOUND`; // return value found in dictionary or i18nKey_NOT_FOUND

  return value;
};

export default {
  init,
  _t,
};
