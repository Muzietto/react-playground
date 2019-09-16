let storage = {
  data: {},
  getItem: key => {
    return storage.data[key] || null;
  },
  setItem: (key, value) => {
    storage.data[key] = value;
  },
};

function getItemSync(key) {
  return storage.getItem(key);
}

function getItem(key, provider) {

  if (storage.getItem(key) !== null) {
    return Promise.resolve(JSON.parse(storage.getItem(key)));
  }

  if (provider) {
    return provider()
      .then(value => {
        setItem(key, value);
        return Promise.resolve(value);
      })
      .catch(Promise.reject);
  }

  return Promise.reject(new Error(`key ${key} not found in storage and no provider given`));
}

function setItem(key, value) {
  if (typeof value === 'undefined') {
    return Promise.reject(`storage.setItem() - undefined value for key ${key}`);
  }

  try {
    storage.setItem(key, JSON.stringify(value));
    return Promise.resolve(value);
  } catch (err) {
    return Promise.reject(err);
  }
}

function setStorage(s) {
  storage = s;
}

export {
  getItem,
  setItem,
  setStorage,
  getItemSync,
};
