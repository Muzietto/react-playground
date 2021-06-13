const express = require('express');
const bodyParser = require('body-parser');
const generalDataEndpoints = require('./endpoints/generalData');

const API_ENTRY_POINT = '/api';

module.exports = (app => {

  // eslint-disable-next-line
  console.log('*** STARTING MOCK SERVER ***');

  const appMethods = {
    get: app.get.bind(app),
    post: app.post.bind(app),
    put: app.put.bind(app),
    delete: app.delete.bind(app),
  };

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, JWT, Authorization');
    next();
  });

  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  app.use(bodyParser.json());

  // eslint-disable-next-line
  console.log('-> loading generalDataEndpoints');
  generalDataEndpoints.forEach(loadEndpoint);

  app.listen(3003, () => {
    // eslint-disable-next-line
    console.log('Mock server listening on port 3003!');
  });

  // eslint-disable-next-line
  console.log('*** MOCK SERVER STARTED ***');

  function loadEndpoint(endpoint) {
    const { method, url, callback } = endpoint;
    // eslint-disable-next-line
    console.log(`endpoint ${method.toUpperCase()} ${url} is ready`);
    appMethods[method](API_ENTRY_POINT + url, callback);
  }
})(express());
