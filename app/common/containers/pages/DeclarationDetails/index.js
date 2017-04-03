import React from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { push } from 'react-router-redux';

import { show } from 'components/Popup';
import { PageTitle } from 'components/Title';
import { FormButtons } from 'components/Form';
import Button, { ButtonsGroup } from 'components/Button';

import DeclarationCreateForm from 'containers/forms/DeclarationCreate';
import { fetchDeclaration } from 'redux/integration_layer';
import DeclarationSignInPopup from 'containers/popups/DeclarationSignIn';
import DeclarationSignInSuccessPopup from 'containers/popups/DeclarationSignInSuccess';

import { getDeclarationFormValues } from 'reducers';
import { onSubmit } from './redux';

@provideHooks({
  fetch: ({ dispatch, params }) => dispatch(fetchDeclaration(params.declarationId)),
})
@connect((state, { params: { declarationId } }) => ({
  declarationFormValues: getDeclarationFormValues(state, declarationId),
}), { onSubmit, show, push })
export default class DeclarationDetails extends React.Component {
  render() {
    const { declarationFormValues, onSubmit, show, push, params: { declarationId } } = this.props;
    return (
      <section>
        <PageTitle>Данні по декларації</PageTitle>
        <DeclarationCreateForm
          disabled
          initialValues={declarationFormValues}
        />
        <FormButtons>
          <ButtonsGroup>
            <Button to="/declarations">Назад</Button>
            <Button theme="blue" onClick={() => show('declarationSignIn')}>Підписати</Button>
          </ButtonsGroup>
        </FormButtons>
        <DeclarationSignInPopup onSubmit={() => onSubmit(declarationId)} />
        <DeclarationSignInSuccessPopup onClose={() => push('/declarations')} />
      </section>
    );
  }
}
