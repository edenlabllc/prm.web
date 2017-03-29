import React from 'react';
import withStyles from 'withStyles';

import Popup, { popup } from 'components/Popup';
import { H3 } from 'components/Title';

import styles from './styles.scss';

@withStyles(styles)
@popup({
  name: 'emptySearchPopup',
})
export default class EmptySearchPopup extends React.Component {
  render() {
    const { popup, handleClose, person, onCreateDeclaration } = this.props;
    return (
      <Popup
        {...popup}
        onClose={handleClose}
        buttons={[
          { children: 'Продовжити пошук', theme: 'light', onClick: () => handleClose() },
          { children: 'Створити нову декларацію', theme: 'blue', to: () => onCreateDeclaration() },
          { children: 'Закрити', theme: 'light', onClick: () => handleClose() },
        ]}
      >
        <div className={styles.wrap}>
          <div className={styles.title}>
            <H3>Пошук пацієнта</H3>
            <H3>{person.first_name} {person.last_name}</H3>
          </div>
          <div>За даними параметрами фізичну особу не знайдено</div>
        </div>
      </Popup>
    );
  }
}
