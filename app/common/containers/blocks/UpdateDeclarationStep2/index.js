import React from 'react';
import { connect } from 'react-redux';
import { show } from 'components/Popup';
import withStyles from 'withStyles';

import { H1 } from 'components/Title';
import CreateDeclarationForm from 'containers/forms/CreateDeclarationStep2';
import SignInDeclarationPopup from 'containers/popups/SignInDeclaration';

import { onCreate } from './redux';

import styles from './styles.scss';

@connect(state => state, {
  show,
  onCreate,
})
@withStyles(styles)
export default class UpdateDeclarationStep2 extends React.Component {

  state = {
    checked: false,
  };

  render() {
    const { show, onCreate } = this.props;
    return (
      <section className={styles.declaration}>
        <div className={styles.declaration__title}>
          <H1>Створити нову декларацію. Крок 2</H1>
        </div>
        <div className={styles.declaration__form}>
          <CreateDeclarationForm
            showPopup={() => show('signInDeclaration')}
            onSubmit={onCreate}
            checked={true}
          />
        </div>
        <SignInDeclarationPopup />
      </section>
    );
  }
}
