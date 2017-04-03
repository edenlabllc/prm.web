import React from 'react';
import withStyles from 'withStyles';

import Popup, { popup } from 'components/Popup';
import { H3 } from 'components/Title';
import ClinicSignInForm from 'containers/forms/ClinicSignIn';

import styles from './styles.scss';

@withStyles(styles)
@popup({
  name: 'clinicSignIn',
})
export default class ClinicSignInPopup extends React.Component {
  render() {
    const { handleClose, onSubmit, popup } = this.props;
    return (
      <Popup
        {...popup}
        onClose={handleClose}
        buttons={[
          { children: 'Назад', theme: 'light', onClick: () => handleClose() },
          { children: 'НАКЛАСТИ ЕЦП', theme: 'blue', to: '/declarations' },
        ]}
      >
        <div className={styles.title}>
          <H3>Накласти Електронний цифровий підпис кліники</H3>
        </div>
        <ClinicSignInForm onSubmit={onSubmit} />
      </Popup>
    );
  }
}
