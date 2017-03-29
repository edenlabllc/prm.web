import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'withStyles';
import { provideHooks } from 'redial';

import { submit } from 'redux-form';

import { H1 } from 'components/Title';
import { FormButtons } from 'components/Form';
import Button, { ButtonsGroup } from 'components/Button';

import CreateDeclarationStep2Form from 'containers/forms/CreateDeclarationStep2';
import SignInDeclarationPopup from 'containers/popups/SignInDeclaration';

import { onCreate, redirectToFirstStepIfDataIsNotExist } from './redux';

import styles from './styles.scss';

@provideHooks({
  fetch: ({ dispatch }) => dispatch(redirectToFirstStepIfDataIsNotExist()),
})
@connect(null, {
  onCreate, submit,
})
@withStyles(styles)
export default class CreateDeclarationStep2 extends React.Component {
  render() {
    const { onCreate, submit } = this.props;
    return (
      <section className={styles.declaration}>
        <div className={styles.declaration__title}>
          <H1>Створити нову декларацію. Крок 2</H1>
        </div>
        <div className={styles.declaration__form}>
          <CreateDeclarationStep2Form onSubmit={onCreate} />
          <FormButtons>
            <ButtonsGroup>
              <Button to="/declaration">Назад</Button>
              <Button theme="blue" onClick={() => submit('createDeclarationStep2')}>Підтвердити</Button>
            </ButtonsGroup>
          </FormButtons>
        </div>
        <SignInDeclarationPopup lookup={true} />
      </section>
    );
  }
}
