import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from 'containers/layouts/App';
import MainLayout from 'containers/layouts/Main';
import DeclarationsBlock from 'containers/blocks/Declarations';

export const configureRoutes = () => (
  <Route component={App}>
    <Route path="/" component={MainLayout}>
      <IndexRedirect to="declarations" />
      <Route path="/declarations" component={DeclarationsBlock} />
    </Route>
  </Route>
);
