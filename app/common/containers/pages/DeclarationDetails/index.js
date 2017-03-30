import React from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { PageTitle } from 'components/Title';

import DeclarationCreateForm from 'containers/forms/DeclarationCreate';
import { fetchDeclaration } from 'redux/integration_layer';

import { getDeclarationFormValues } from 'reducers';

@provideHooks({
  fetch: ({ dispatch, params }) => dispatch(fetchDeclaration(params.declarationId)),
})
@connect((state, { params: { declarationId } }) => ({
  declarationFormValues: getDeclarationFormValues(state, declarationId),
}))
export default class DeclarationDetails extends React.Component {
  render() {
    const { declarationFormValues } = this.props;
    return (
      <section>
        <PageTitle>Данні по декларації</PageTitle>
        <DeclarationCreateForm disabled initialValues={declarationFormValues} />
      </section>
    );
  }
}
