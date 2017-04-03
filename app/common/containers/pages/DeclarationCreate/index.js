import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { submit, getFormValues } from 'redux-form';

import { PageTitle } from 'components/Title';

import DeclarationCreateForm from 'containers/forms/DeclarationCreate';

import LookupConfirmPopup from 'containers/popups/LookupConfirm';
import VerifyLookupFailurePopup from 'containers/popups/VerifyLookupFailure';

import DeclarationCreateSuccessPopup from 'containers/popups/DeclarationCreateSuccess';
import DeclarationCreateFailurePopup from 'containers/popups/DeclarationCreateFailure';

import { FormButtons } from 'components/Form';
import Button, { ButtonsGroup } from 'components/Button';

import { onDataFormSubmit, onLookupSubmit } from './redux';

@connect((state, { location: { query } }) => ({
  declarationFormValues: {
    ...query,
    gender: 'FEMALE',
    phones: {
      MOBILE: {
        number: query.phone_number,
      },
    },
  },
  ...state.pages.DeclarationCreate,
  formValues: getFormValues('declarationCreate')(state),
}), {
  onDataFormSubmit,
  onLookupSubmit,
  submit,
  push,
})
export default class CreateDeclarationStep2 extends React.Component {
  render() {
    const {
      declarationFormValues,
      onDataFormSubmit,
      onLookupSubmit,
      formValues,
      submit,
      requestId,
      push,
    } = this.props;
    return (
      <section>
        <PageTitle>Створити нову декларацію. Крок 2</PageTitle>
        <DeclarationCreateForm initialValues={declarationFormValues} onSubmit={onDataFormSubmit} />
        <FormButtons>
          <ButtonsGroup>
            <Button to="/declarations/search">Назад</Button>
            <Button theme="blue" onClick={() => submit('declarationCreate')}>Підтвердити</Button>
          </ButtonsGroup>
        </FormButtons>
        <LookupConfirmPopup onSubmit={({ code }) => onLookupSubmit(requestId, code, formValues)} />
        <VerifyLookupFailurePopup />

        <DeclarationCreateSuccessPopup onClose={() => push('/declarations')} />
        <DeclarationCreateFailurePopup />
      </section>
    );
  }
}
