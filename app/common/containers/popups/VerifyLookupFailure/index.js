import React from 'react';
import withStyles from 'withStyles';
import classnames from 'classnames';

import Popup, { popup } from 'components/Popup';
import { H3 } from 'components/Title';
import styles from './styles.scss';

@withStyles(styles)
@popup({
  name: 'verifyLookupFailure',
})
export default class VerifyLookupFailure extends React.Component {
  render() {
    const { popup, handleClose } = this.props;
    return (
      <Popup
        {...popup}
        onClose={handleClose}
        buttons={[
          { children: 'ЗАКРИТИ', theme: 'blue', onClick: () => handleClose() },
        ]}
      >
        <div className={classnames(styles.title, styles.title_wide)}>
          <H3>Ви невірно ввели код з смс</H3>
        </div>
      </Popup>
    );
  }
}
