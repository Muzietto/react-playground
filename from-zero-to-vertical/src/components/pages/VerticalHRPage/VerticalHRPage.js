import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import VerticalPageTemplate from '@src/components/templates/VerticalPageTemplate/VerticalPageTemplate';
import client from '@src/model/data/client';

const VerticalHRPage = () => {

  const userProfiless = [
    { name: 'HR', iconName: 'hr' },
    { name: 'Analytics Tool', iconName: 'analytics' },
  ];

  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    client.userProfiles('0')
      .then(setUserProfiles);
  }, []);

  const verticalHrPageBody = <>
    <Typography variant='h1'>
    Vertical HR Page
    </Typography>
    <pre>
      {JSON.stringify(userProfiles, null, 2)}
    </pre>
  </>;

  // https://stackoverflow.com/questions/67833598/material-ui-4-11-4-grid-items-in-column-require-container-direction-row-to
  return <VerticalPageTemplate
    userProfiles={userProfiles.profiles}
  >
    {verticalHrPageBody}
  </VerticalPageTemplate>;
};

export default VerticalHRPage;
