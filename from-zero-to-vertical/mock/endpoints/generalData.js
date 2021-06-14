const handlers = [];

const withDelay = fn => setTimeout(fn, 2000);

handlers.push({ // GET /user_profiles/:userId
  url: '/user_profiles/:userId',
  method: 'get',
  callback: (req, res) => {

    const { userId } = req.params;

    const { USERPROFILES } = require('import-fresh')('../data/GENERALPAGE_USER_PROFILES.js');

    const userProfiles = USERPROFILES(userId);

    // eslint-disable-next-line no-console
    console.log('MOCK - GET /user_profiles --> 200');
    withDelay(() => res.status(200).send(userProfiles));
  },
});

handlers.push({ // GET /dictionary/:locale
  url: '/dictionary/:locale',
  method: 'get',
  // eslint-disable-next-line no-unused-vars
  callback: (req, res) => {

    // extract locale from request parameters
    const { locale } = req.params;

    // instantiate const DICTIONARIES from DICTIONARIES.js
    const { DICTIONARIES } = require('import-fresh')('../data/DICTIONARIES.js');

    // send dictionary with HTTP status 200
    const localDictionary = DICTIONARIES[locale];

    // eslint-disable-next-line no-console
    console.log('MOCK - GET /dictionary/:locale --> 200');
    withDelay(() => res.status(200).send(localDictionary));
  },
});

module.exports = handlers;
