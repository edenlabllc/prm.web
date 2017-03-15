import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';

import App from 'containers/layouts/App';
import MainLayout from 'containers/layouts/Main';
import NavigationLayout from 'containers/layouts/NavigationLayout';
import DeclarationsBlock from 'containers/blocks/Declarations';

import CreateDeclarationLayout from 'containers/layouts/CreateDeclaration';
import CreateDeclarationStep1 from 'containers/blocks/CreateDeclarationStep1';

export const configureRoutes = () => (
  <Route component={App}>
    <Route component={MainLayout}>
      <Route path="create" component={CreateDeclarationLayout}>
        <IndexRoute component={CreateDeclarationStep1} />
      </Route>
      <Route path="/" component={NavigationLayout}>
        <IndexRedirect to="declarations" />
        <Route path="declarations" component={DeclarationsBlock} />
      </Route>
    </Route>
  </Route>
);
