import React from 'react';

import withStyles from 'withStyles';
import styles from './styles.scss';


@withStyles(styles)
export default class Header extends React.Component {

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.header__title}>
          <p className={styles.bold}>Medical</p>
          <p>Information System</p>
        </div>
        <div className={styles.header__account}>
          <div className={styles.header__account__logo} />
          <div className={styles.header__account__name}>
            Григорій Квітка
            <span className={styles.header__account__select} />
          </div>
        </div>
      </div>
    );
  }
}
