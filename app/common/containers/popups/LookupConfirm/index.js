import React from 'react';
import { connect } from 'react-redux';

import withStyles from 'withStyles';
import classnames from 'classnames';
import { submit } from 'redux-form';

import Popup, { popup } from 'components/Popup';
import { H3 } from 'components/Title';
import LookupConfirmForm from 'containers/forms/LookupConfirm';

import styles from './styles.scss';

@withStyles(styles)
@popup({
  name: 'lookupConfirm',
})
@connect(null, {
  submit,
})
export default class LookupConfirm extends React.Component {
  render() {
    const { popup, submit, handleClose, onSubmit } = this.props;
    return (
      <Popup
        {...popup}
        onClose={handleClose}
        buttons={[
          { children: 'Назад', theme: 'light', onClick: () => handleClose() },
          { children: 'Підтвердити', theme: 'blue', onClick: () => submit('lookupConfirm') },
        ]}
      >
        <div className={classnames(styles.title, styles.title_wide)}>
          <H3>Введіть код з смс</H3>
          <LookupConfirmForm onSubmit={onSubmit} />
        </div>
      </Popup>
    );
  }
}
