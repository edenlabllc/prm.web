import React from 'react';
import withStyles from 'withStyles';

import NSZNav from 'containers/blocks/NSZNav';
import Icon from 'components/Icon';

import styles from './styles.scss';


@withStyles(styles)
export default class NSZHeader extends React.Component {

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.header__in}>
          <div className={styles.header__logo}>
            <p>Національна служба здоров'я</p>
          </div>
          <div className={styles.header__nav}>
            <NSZNav />
          </div>
          <div className={styles.header__btn}>
            Службовий вхід
            <div className={styles.header__icon}>
              <Icon name="arrow-in" />
            </div>
          </div>
        </div>

      </div>
    );
  }
}
