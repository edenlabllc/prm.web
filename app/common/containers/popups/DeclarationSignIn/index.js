import React from 'react';
import { submit } from 'redux-form';
import { connect } from 'react-redux';
import withStyles from 'withStyles';

import Popup, { popup } from 'components/Popup';
import { H3 } from 'components/Title';
import DeclarationSignInForm from 'containers/forms/DeclarationSignIn';

import styles from './styles.scss';

@withStyles(styles)
@popup({
  name: 'declarationSignIn',
})
@connect(null, { submit })
export default class DeclarationSignInPopup extends React.Component {
  render() {
    const { handleClose, onSubmit, popup, submit } = this.props;
    return (
      <Popup
        {...popup}
        onClose={handleClose}
        buttons={[
          { children: 'Друкувати декларацію', theme: 'light', onClick: () => {} },
          { children: 'НАКЛАСТИ ЕЦП', theme: 'blue', onClick: () => submit('declarationSignIn') },
        ]}
      >
        <div className={styles.title}>
          <H3>Накласти Електронний цифровий підпис</H3>
        </div>
        <DeclarationSignInForm onSubmit={onSubmit} />
      </Popup>
    );
  }
}
