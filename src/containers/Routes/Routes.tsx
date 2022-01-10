import React, { Suspense, lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { UI_ROUTES } from '../../constants/routes';

const ExperiencesPage = lazy(() => import(/* webpackChunkName: "ExperiencesPage" */ '../../pages/ExperiencesPage'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route path={UI_ROUTES.experiences} component={ExperiencesPage} />
        <Redirect to={UI_ROUTES.experiences} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
