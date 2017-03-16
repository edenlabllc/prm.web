import React from 'react';import { connect } from 'react-redux';
import withStyles from 'withStyles';

import { submit } from 'redux-form';
import Popup, { popup } from 'components/Popup';
import { H3 } from 'components/Title';
import SignInDeclarationForm from 'containers/forms/SignInDeclarationForm';

import styles from './styles.scss';

@withStyles(styles)
@popup({
  name: 'signInDeclaration',
})
@connect(null, { submit })
export default class SignInDeclaration extends React.Component {
  render() {
    const { popup, handleClose, submit, invalid, submitting } = this.props;
    return (
      <Popup
        {...popup}
        onClose={handleClose}
        buttons={[
          { children: 'Друкувати декларацію', theme: 'light', disabled: invalid || submitting, onClick: () => { alert('print'); } },
          { children: 'НАКЛАСТИ ЕЦП', theme: 'blue', disabled: invalid || submitting, onClick: () => submit('signInDeclaration') },
        ]}
      >
        <div className={styles.title}>
          <H3>Накласти Електронний цифровий підпис</H3>
        </div>
        <SignInDeclarationForm />
      </Popup>
    );
  }
}
