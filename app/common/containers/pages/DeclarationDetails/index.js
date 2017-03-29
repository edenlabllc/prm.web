import React from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { PageTitle } from 'components/Title';

import CreateDeclarationStep2Form from 'containers/forms/CreateDeclarationStep2';
import CreateDeclarationStep1Form from 'containers/forms/CreateDeclarationStep1';
import { fetchDeclaration } from 'redux/integration_layer';

import { getDeclaration } from 'reducers';

@provideHooks({
  fetch: ({ dispatch, params }) => dispatch(fetchDeclaration(params.declarationId)),
})
@connect((state, ownProps) => ({
  declaration: getDeclaration(state, ownProps.params.declarationId),
}))
export default class DeclarationDetails extends React.Component {
  render() {
    const { declaration } = this.props;

    return (
      <section>
        <PageTitle>Данні по декларації</PageTitle>
        <CreateDeclarationStep1Form readonly initialValues={declaration.patient} />
        <CreateDeclarationStep2Form
          disabled
          initialValues={{
            ...declaration.patient,
          }}
        />
      </section>
    );
  }
}
