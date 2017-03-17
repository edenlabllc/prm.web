import React from 'react';
// import { connect } from 'react-redux';
import withStyles from 'withStyles';
import classnames from 'classnames';

// import { submit } from 'redux-form';
import Popup, { popup } from 'components/Popup';
import { H3 } from 'components/Title';
import SignInDeclarationForm from 'containers/forms/SignInDeclarationForm';

// import { onSubmit } from './redux';

import styles from './styles.scss';


// @connect(null, { submit })
@withStyles(styles)
@popup({
  name: 'signInDeclaration',
})
export default class SignInDeclaration extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.onSubmit = this.onSubmit.bind(this);
  // }

  state = {
    signIn: false,
  };

  onSubmit() {
    this.setState({
      signIn: true,
    });
    // return this.props.onSubmit(...args).then(() => {
    //   this.setState({
    //     signIn: true,
    //   });
    // });
  }

  render() {
    const { popup, handleClose } = this.props;
    if (this.state.signIn) {
      return (
        <Popup
          {...popup}
          onClose={handleClose}
          buttons={[
            { children: 'ЗАКРИТИ', theme: 'blue', onClick: () => handleClose() },
          ]}
        >
          <div className={classnames(styles.title, styles.title_wide)}>
            <H3>ДЕКЛАРАЦІЮ УСПІШНО СТВОРЕНО</H3>
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
          { children: 'НАКЛАСТИ ЕЦП', theme: 'blue', onClick: () => this.onSubmit() },
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
