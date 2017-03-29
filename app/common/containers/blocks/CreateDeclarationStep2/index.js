import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'withStyles';
import { provideHooks } from 'redial';

import { H1 } from 'components/Title';
import CreateDeclarationForm from 'containers/forms/CreateDeclarationStep2';
import SignInDeclarationPopup from 'containers/popups/SignInDeclaration';

import { onCreate, redirectToFirstStepIfDataIsNotExist } from './redux';

import styles from './styles.scss';

@provideHooks({
  fetch: ({ dispatch }) => dispatch(redirectToFirstStepIfDataIsNotExist()),
})
@connect(null, {
  onCreate,
})
@withStyles(styles)
export default class CreateDeclarationStep2 extends React.Component {
  render() {
    const { onCreate } = this.props;
    return (
      <section className={styles.declaration}>
        <div className={styles.declaration__title}>
          <H1>Створити нову декларацію. Крок 2</H1>
        </div>
        <div className={styles.declaration__form}>
          <CreateDeclarationForm onSubmit={onCreate} />
        </div>
        <SignInDeclarationPopup lookup={true} />
      </section>
    );
  }
}
