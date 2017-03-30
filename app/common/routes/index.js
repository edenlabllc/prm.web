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
import ReportsPage from 'containers/pages/ReportsPage';

import MainPage from 'containers/pages/MainPage';

import CreateLayout from 'containers/layouts/CreateLayout';

import DeclarationSearch from 'containers/pages/DeclarationSearch';
import DeclarationDetails from 'containers/pages/DeclarationDetails';
import DeclarationEdit from 'containers/pages/DeclarationEdit';
import DeclarationCreate from 'containers/pages/DeclarationCreate';

import DoctorCreateStep1 from 'containers/pages/DoctorCreateStep1';
import DoctorCreateStep2 from 'containers/pages/DoctorCreateStep2';

import ClinicCreateStep1 from 'containers/pages/ClinicCreateStep1';
import ClinicCreateStep2 from 'containers/pages/ClinicCreateStep2';
import ClinicCreateStep3 from 'containers/pages/ClinicCreateStep3';

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
        <Route path="declarations/create" component={DeclarationCreate} />
        <Route path="declarations/:declarationId/edit" component={DeclarationEdit} />
        <Route path="declarations/:declarationId" component={DeclarationDetails} />

        <Route path="doctors/create" component={DoctorCreateStep1} />
        <Route path="doctors/create/2" component={DoctorCreateStep2} />

        <Route path="clinics/create" component={ClinicCreateStep1} />
        <Route path="clinics/create/2" component={ClinicCreateStep2} />
        <Route path="clinics/create/3" component={ClinicCreateStep3} />
      </Route>

      <Route component={NavigationLayout}>
        <Route path="declarations" component={DeclarationsPage} />
        <Route path="doctors" component={DoctorsPage} />
        <Route path="reports" component={ReportsPage} />
      </Route>
    </Route>
  </Route>
);
