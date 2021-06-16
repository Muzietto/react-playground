import React from 'react';
import Typography from '@material-ui/core/Typography';
import VerticalPageTemplate from '@src/components/templates/VerticalPageTemplate/VerticalPageTemplate';

const VerticalHRPage = () => {

  const userProfiles = [
    { name: 'HR', iconName: 'hr' },
    { name: 'Analytics Tool', iconName: 'analytics' },
  ];

  const verticalHrPageBody = <Typography variant='h1'>
    Vertical HR Page
  </Typography>;

  return <VerticalPageTemplate
    userProfiles={userProfiles}
  >
    {verticalHrPageBody}
  </VerticalPageTemplate>;
};

export default VerticalHRPage;
