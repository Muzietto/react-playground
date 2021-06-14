import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashPage from '@src/main/SplashPage/SplashPage';
import VerticalHRPage from '@src/components/pages/VerticalHRPage/VerticalHRPage';
import VerticalFinancePage from '@src/components/pages/VerticalFinancePage/VerticalFinancePage';

const ROOT_URL = ENV.RESOURCE_ROOT_URL;

const Routes = () => <Suspense fallback={<SplashPage />}>
  <Switch>
    <Route exact path={`${ROOT_URL}/`} component={VerticalHRPage} />
    <Route exact path={`${ROOT_URL}/hr-detail`} component={VerticalHRPage} />
    <Route exact path={`${ROOT_URL}/finance-detail`} component={VerticalFinancePage} />
  </Switch>
</Suspense>;

export default Routes;
