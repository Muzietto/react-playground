import http from '@src/model/http/http.js';

const userProfiles = userId => http.get(`/user_profiles/${userId}`)
  .then(response => {
    return {
      ...response.data,
      profiles: response.data.profiles
        .filter(profile => profile.profileId !== 1)
        .map(profile => ({
          ...profile,
          ...profilesMappings(profile.profileId),
        })),
    };
  });

// eslint-disable-next-line no-unused-vars
const dictionary = locale => null;

export default {
  userProfiles,
  dictionary,
};

function profilesMappings(profileId) {
  return {
    1: { name: 'general', iconName: 'general', pageUrl: '/general' },
    2: { name: 'HR', iconName: 'hr', pageUrl: '/hr-detail' },
    3: { name: 'payroll', iconName: 'payroll', pageUrl: '/payroll-detail' },
    4: { name: 'finance', iconName: 'finance', pageUrl: '/finance-detail' },
    5: { name: 'Analytics Tool', iconName: 'analytics', pageUrl: '/analytics-tool' },
  }[profileId] || { name: 'unknown', iconName: 'unknown' };
}
