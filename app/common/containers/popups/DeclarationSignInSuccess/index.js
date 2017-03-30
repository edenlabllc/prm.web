import React from 'react';
import withStyles from 'withStyles';
import classnames from 'classnames';

import Popup, { popup } from 'components/Popup';
import { H3 } from 'components/Title';
import styles from './styles.scss';

@withStyles(styles)
@popup({
  name: 'declarationSignInSuccess',
})
export default class DeclarationSignInSuccess extends React.Component {
  render() {
    const { popup, handleClose, onClose } = this.props;
    return (
      <Popup
        {...popup}
        onClose={handleClose}
        buttons={[
          { children: 'ЗАКРИТИ', theme: 'blue', onClick: () => handleClose() && onClose() },
        ]}
      >
        <div className={classnames(styles.title, styles.title_wide)}>
          <H3>ДЕКЛАРАЦІЮ УСПІШНО ПІДПИСАНО</H3>
        </div>
      </Popup>
    );
  }
}
