import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';

import App from 'containers/layouts/App';
import MainLayout from 'containers/layouts/Main';
import NavigationLayout from 'containers/layouts/NavigationLayout';
import DeclarationsPage from 'containers/pages/Declarations';

import CreateDeclarationLayout from 'containers/layouts/CreateDeclaration';
import CreateDeclarationStep1 from 'containers/blocks/CreateDeclarationStep1';
import CreateDeclarationStep2 from 'containers/blocks/CreateDeclarationStep2';

export const configureRoutes = () => (
  <Route component={App}>
    <Route component={MainLayout}>
      <Route path="create" component={CreateDeclarationLayout}>
        <IndexRoute component={CreateDeclarationStep1} />
        <Route component={CreateDeclarationStep2} />
      </Route>
      <Route path="/" component={NavigationLayout}>
        <IndexRedirect to="declarations" />
        <Route path="declarations" component={DeclarationsPage} />
      </Route>
    </Route>
  </Route>
);
