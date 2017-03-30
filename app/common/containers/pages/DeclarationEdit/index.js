import React from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';

import { PageTitle } from 'components/Title';
import { FormButtons } from 'components/Form';
import Button, { ButtonsGroup } from 'components/Button';

import DeclarationCreateForm from 'containers/forms/DeclarationCreate';

import { getDeclarationFormValues } from 'reducers';
import { fetchDeclaration } from 'redux/integration_layer';
import { onCreate } from './redux';

@provideHooks({
  fetch: ({ dispatch, params }) => dispatch(fetchDeclaration(params.declarationId)),
})
@connect((state, { params: { declarationId } }) => ({
  declarationFormValues: getDeclarationFormValues(state, declarationId),
}), {
  onCreate,
})
export default class DeclarationEditPage extends React.Component {
  render() {
    const { onCreate, declarationFormValues } = this.props;
    return (
      <section>
        <PageTitle>Створити нову декларацію. Крок 2</PageTitle>
        <DeclarationCreateForm
          initialValues={declarationFormValues}
          onSubmit={onCreate}
          allowed
        />
        <FormButtons>
          <ButtonsGroup>
            <Button to="/declaration/search">Назад</Button>
            <Button theme="blue">Підписати</Button>
          </ButtonsGroup>
        </FormButtons>
      </section>
    );
  }
}
