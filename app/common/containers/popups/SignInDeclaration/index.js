import React from 'react';
// import { connect } from 'react-redux';
import withStyles from 'withStyles';
import classnames from 'classnames';

// import { submit } from 'redux-form';
import Popup, { popup } from 'components/Popup';
import { H3 } from 'components/Title';
import SignInDeclarationForm from 'containers/forms/SignInDeclarationForm';
import LookupDeclarationForm from 'containers/forms/LookupDeclarationForm';


// import { onSubmit } from './redux';

import styles from './styles.scss';


// @connect(null, { submit })
@withStyles(styles)
@popup({
  name: 'signInDeclaration',
})
export default class SignInDeclaration extends React.Component {

  state = {
    signIn: false,
    lookup: false,
  };
  onSign() {
    this.setState({
      lookup: true,
    });
  }

  render() {
    const { popup, handleClose } = this.props;
    if (this.state.signIn) {
      return (
        <Popup
          {...popup}
          onClose={handleClose}
          buttons={[
            { children: 'ЗАКРИТИ', theme: 'blue', onClick: () => handleClose(), to: '/declarations' },
          ]}
        >
          <div className={classnames(styles.title, styles.title_wide)}>
            <H3>ДЕКЛАРАЦІЮ УСПІШНО СТВОРЕНО</H3>
          </div>
        </Popup>
      );
    }
    if (this.state.lookup) {
      return (
        <Popup
          {...popup}
          onClose={handleClose}
          buttons={[
            { children: 'Назад', theme: 'light', onClick: () => this.setState({ lookup: false }) },
            { children: 'Підтвердити', theme: 'blue', onClick: () => { this.setState({ lookup: false, signIn: true }); } },
          ]}
        >
          <div className={classnames(styles.title, styles.title_wide)}>
            <H3>Введіть код з смс</H3>
            <LookupDeclarationForm />
          </div>
        </Popup>
      );
    }

    return (
      <Popup
        {...popup}
        onClose={handleClose}
        buttons={[
          { children: 'Друкувати декларацію', theme: 'light', onClick: () => { alert('print'); } },
          { children: 'НАКЛАСТИ ЕЦП', theme: 'blue', onClick: () => this.onSign() },
        ]}
      >
        <div className={styles.title}>
          <H3>Накласти Електронний цифровий підпис</H3>
        </div>
        <SignInDeclarationForm />
        <div className={styles.br} />
      </Popup>
    );
  }
}
