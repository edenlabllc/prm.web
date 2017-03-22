import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from 'containers/layouts/App';
import MainLayout from 'containers/layouts/Main';
import NavigationLayout from 'containers/layouts/NavigationLayout';
import DeclarationsPage from 'containers/pages/Declarations';
import DoctorsPage from 'containers/pages/Doctors';

import CreateLayout from 'containers/layouts/CreateLayout';

import CreateDeclarationStep1 from 'containers/blocks/CreateDeclarationStep1';
import CreateDeclarationStep2 from 'containers/blocks/CreateDeclarationStep2';

import CreateDoctorStep1 from 'containers/blocks/CreateDoctorStep1';
import CreateDoctorStep2 from 'containers/blocks/CreateDoctorStep2';


export const configureRoutes = () => (
  <Route component={App}>
    <Route component={MainLayout}>
      <Route component={CreateLayout}>
        <Route path="declaration" component={CreateDeclarationStep1} />
        <Route path="declarationStep2" component={CreateDeclarationStep2} />
      </Route>
      <Route component={CreateLayout}>
        <Route path="doctor" component={CreateDoctorStep1} />
        <Route path="doctorsStep2" component={CreateDoctorStep2} />
      </Route>

      <Route path="/" component={NavigationLayout}>
        <IndexRedirect to="declarations" />
        <Route path="declarations" component={DeclarationsPage} />
        <Route path="doctors" component={DoctorsPage} />
      </Route>
    </Route>
  </Route>
);
