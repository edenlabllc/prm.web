import React from 'react';
import withStyles from 'withStyles';

import Popup, { popup } from 'components/Popup';
import { H3 } from 'components/Title';

import styles from './styles.scss';

@withStyles(styles)
@popup({
  name: 'specifySearchPopup',
})
export default class SpecifySearchPopup extends React.Component {
  render() {
    const { popup, handleClose, person, onCreateDeclaration } = this.props;
    return (
      <Popup
        {...popup}
        onClose={handleClose}
        buttons={[
          { children: 'Продовжити пошук', theme: 'light', onClick: () => handleClose() },
          { children: 'Створити нову декларацію', theme: 'blue', onClick: () => onCreateDeclaration() },
          { children: 'Закрити', theme: 'light', onClick: () => handleClose() },
        ]}
      >
        <div className={styles.wrap}>
          <div className={styles.title}>
            <H3>Пошук пацієнта</H3>
            <H3>{person.first_name} {person.last_name}</H3>
          </div>
          <p className={styles.item}>Вам потрібно вказати дані пацієнта більш детально.</p>
          <p className={styles.item}>
            Кількість людей, що підійшли за данними параметрами більше 15.
          </p>
        </div>
      </Popup>
    );
  }
}
