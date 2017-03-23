import React from 'react';
import withStyles from 'withStyles';
import { connect } from 'react-redux';

import Popup, { popup } from 'components/Popup';
import { H3 } from 'components/Title';

import styles from './styles.scss';

@withStyles(styles)
@popup({
  name: 'specifySearchPopup',
})
@connect(state => ({
  emptyPerson: state.blocks.CreateDeclarationStep1.currentPerson,
}))
export default class SpecifySearchPopup extends React.Component {
  render() {
    const { popup, handleClose, emptyPerson } = this.props;
    return (
      <Popup
        {...popup}
        onClose={handleClose}
        buttons={[
          { children: 'Продовжити пошук', theme: 'light', to: '/declaration' },
          { children: 'Створити нову декларацію', theme: 'blue', to: '/declarationStep2' },
          { children: 'Закрити', theme: 'light', onClick: () => handleClose() },
        ]}
      >
        <div className={styles.wrap}>
          <div className={styles.title}>
            <H3>Пошук пацієнта</H3>
            <H3>{emptyPerson.first_name} {emptyPerson.last_name}</H3>
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
