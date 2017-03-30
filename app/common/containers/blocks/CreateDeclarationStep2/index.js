import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'withStyles';
import { provideHooks } from 'redial';

import { submit } from 'redux-form';

import { H1 } from 'components/Title';

import DeclarationCreateForm from 'containers/forms/DeclarationCreate';

import LookupConfirmPopup from 'containers/popups/LookupConfirm';
import VerifyLookupSuccess from 'containers/popups/VerifyLookupSuccess';
import VerifyLookupFailure from 'containers/popups/VerifyLookupFailure';

import { FormButtons } from 'components/Form';
import Button, { ButtonsGroup } from 'components/Button';

import { onDataFormSubmit, onLookupSubmit, redirectToFirstStepIfDataIsNotExist } from './redux';

import styles from './styles.scss';

@provideHooks({
  fetch: ({ dispatch }) => dispatch(redirectToFirstStepIfDataIsNotExist()),
})
@connect(state => state.blocks.CreateDeclarationStep2, {
  onDataFormSubmit,
  onLookupSubmit,
  submit,
})
@withStyles(styles)
export default class CreateDeclarationStep2 extends React.Component {
  render() {
    const {
      onDataFormSubmit,
      onLookupSubmit,
      submit,
    } = this.props;
    return (
      <section className={styles.declaration}>
        <div className={styles.declaration__title}>
          <H1>Створити нову декларацію. Крок 2</H1>
        </div>
        <div className={styles.declaration__form}>
          <DeclarationCreateForm onSubmit={onDataFormSubmit} />
          <FormButtons>
            <ButtonsGroup>
              <Button to="/declaration">Назад</Button>
              <Button theme="blue" onClick={() => submit('createDeclarationStep2')}>Підтвердити</Button>
            </ButtonsGroup>
          </FormButtons>
        </div>
        <LookupConfirmPopup onSubmit={onLookupSubmit} />
        <VerifyLookupSuccess />
        <VerifyLookupFailure />
      </section>
    );
  }
}
