import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import SplashPage from '@src/main/SplashPage/SplashPage';
import VerticalHRPage from '@src/components/pages/VerticalHRPage/VerticalHRPage';

const ROOT_URL = ENV.RESOURCE_ROOT_URL;

const Routes = () => <Suspense fallback={<SplashPage />}>
  <Switch>
    <Route exact path={`${ROOT_URL}/`} component={VerticalHRPage} />
  </Switch>
</Suspense>;

Routes.propTypes = {
  isGold: PropTypes.bool,
  action: PropTypes.string,
};

export default Routes;
