import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/layouts/App';
import MainLayout from 'containers/layouts/Main';
import NavigationLayout from 'containers/layouts/NavigationLayout';

import NSZLayout from 'containers/layouts/NSZLayout';
import NSZLayoutMenu from 'containers/layouts/NSZLayoutMenu';
import NSZModulesPage from 'containers/pages/NSZModulesPage';

import MISLayout from 'containers/layouts/MISLayout';

import DeclarationsPage from 'containers/pages/Declarations';
import DoctorsPage from 'containers/pages/Doctors';

import MainPage from 'containers/pages/MainPage';

import CreateLayout from 'containers/layouts/CreateLayout';

import DeclarationSearch from 'containers/pages/DeclarationSearch';
import DeclarationDetails from 'containers/pages/DeclarationDetails';
import DeclarationEdit from 'containers/pages/DeclarationEdit';

import DoctorCreateStep1 from 'containers/pages/DoctorCreateStep1';
import DoctorCreateStep2 from 'containers/pages/DoctorCreateStep2';

import CreateDeclarationStep2 from 'containers/blocks/CreateDeclarationStep2';


import CreateClinicStep1 from 'containers/blocks/CreateClinicStep1';
import CreateClinicStep2 from 'containers/blocks/CreateClinicStep2';
import CreateClinicStep3 from 'containers/blocks/CreateClinicStep3';

export const configureRoutes = () => (
  <Route component={App}>

    <Route path="/" component={NSZLayout}>
      <Route component={NSZLayoutMenu}>
        <IndexRoute component={NSZModulesPage} />
      </Route>
    </Route>

    <Route component={MISLayout}>
      <Route path="main" component={MainPage} />
    </Route>

    <Route component={MainLayout}>
      <Route component={CreateLayout}>
        <Route path="declarations/search" component={DeclarationSearch} />
        <Route path="declarations/:declarationId" component={DeclarationDetails} />
        <Route path="declarations/:declarationId/edit" component={DeclarationEdit} />

        <Route path="declarationStep2" component={CreateDeclarationStep2} />

        <Route path="doctors/create" component={DoctorCreateStep1} />
        <Route path="doctors/create/2" component={DoctorCreateStep2} />
        <Route path="clinic" component={CreateClinicStep1} />
        <Route path="clinicStep2" component={CreateClinicStep2} />
        <Route path="clinicStep3" component={CreateClinicStep3} />
      </Route>

      <Route component={NavigationLayout}>
        <Route path="declarations" component={DeclarationsPage} />
        <Route path="doctors" component={DoctorsPage} />
      </Route>
    </Route>
  </Route>
);
