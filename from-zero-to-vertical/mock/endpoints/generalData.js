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

module.exports = handlers;
