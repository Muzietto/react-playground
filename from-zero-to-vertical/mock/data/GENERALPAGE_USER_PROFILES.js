const userProfiles = require('./GENERALPAGE_USER_PROFILES.json');

module.exports = {
  USERPROFILES: userId => userProfiles[userId],
};
