import React from 'react';
import withStyles from 'withStyles';
import classnames from 'classnames';

import Popup, { popup } from 'components/Popup';
import { H3 } from 'components/Title';
import styles from './styles.scss';

@withStyles(styles)
@popup({
  name: 'declarationCreateFailure',
})
export default class DeclarationCreateFailurePopup extends React.Component {
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
          <H3>ПОМИЛКА ПРИ СТВОРЕННІ ДЕКЛАРАЦІЇ</H3>
          <p>Спробуйте ще раз або зателефонуйте до служби підтримки за номером 0800 322 22 22</p>
        </div>
      </Popup>
    );
  }
}
