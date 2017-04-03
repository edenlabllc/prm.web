import React from 'react';
import { provideHooks } from 'redial';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { submit, getFormValues } from 'redux-form';

import { PageTitle } from 'components/Title';
import { FormButtons } from 'components/Form';
import Button, { ButtonsGroup } from 'components/Button';

import DeclarationCreateForm from 'containers/forms/DeclarationCreate';

import LookupConfirmPopup from 'containers/popups/LookupConfirm';
import VerifyLookupFailurePopup from 'containers/popups/VerifyLookupFailure';

import DeclarationCreateSuccessPopup from 'containers/popups/DeclarationCreateSuccess';
import DeclarationCreateFailurePopup from 'containers/popups/DeclarationCreateFailure';

import { getDeclarationFormValues } from 'reducers';
import { fetchDeclaration } from 'redux/integration_layer';
import { onDataFormSubmit, onLookupSubmit } from './redux';

@provideHooks({
  fetch: ({ dispatch, params }) =>
    dispatch(fetchDeclaration(params.declarationId, { cache: false })),
})
@connect((state, { params: { declarationId } }) => ({
  declarationFormValues: getDeclarationFormValues(state, declarationId),
  formValues: getFormValues('declarationCreate')(state),
}), {
  onDataFormSubmit,
  onLookupSubmit,
  submit,
  push,
})
export default class DeclarationEditPage extends React.Component {
  render() {
    const {
      declarationFormValues,
      onDataFormSubmit,
      onLookupSubmit,
      requestId,
      submit,
      push,
      formValues,
      params: { declarationId },
    } = this.props;
    return (
      <section>
        <PageTitle>Створити нову декларацію. Крок 2</PageTitle>
        <DeclarationCreateForm
          initialValues={declarationFormValues}
          onSubmit={onDataFormSubmit}
          allowed
        />
        <FormButtons>
          <ButtonsGroup>
            <Button to="/declarations/search">Назад</Button>
            <Button theme="blue" onClick={() => submit('declarationCreate')}>Підтвердити</Button>
          </ButtonsGroup>
        </FormButtons>
        <LookupConfirmPopup
          onSubmit={({ code }) =>
            onLookupSubmit(requestId, code, formValues, declarationId)}
        />
        <VerifyLookupFailurePopup />

        <DeclarationCreateSuccessPopup onClose={() => push('/declarations')} />
        <DeclarationCreateFailurePopup />
      </section>
    );
  }
}
