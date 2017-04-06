import React from 'react';
import withStyles from 'withStyles';
import { translate } from 'react-i18next';
import NSZHeader from 'containers/blocks/NSZHeader';

import styles from './styles.scss';

@withStyles(styles)
@translate()
export default class LandingLayoutMenu extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.main}>
        <header>
          <NSZHeader />
        </header>
        <div className={styles.disclaim}>
          <span>Увага! Демо станом на 06 квітня 2017!</span>
          Цей макет було створено для демонстрації логіки процесів eHealth в частині
          створення декларацій
          <span>та не є продуктом, що буде запущено в експлуатацію.</span>
          Платформа eHealth має забезпечити роботу з реєстрами eHealth з використанням API.
          Автоматизація процесів лікарів, співробітників медичних закладів та інших
          процесів проводиться постачальниками Медичних Інформаційних Систем.
        </div>
        <main className={styles.main__in}>
          { children }
        </main>
        <footer>
          <div className={styles.footer}>
            ©2017 All Rights Recerved
          </div>
        </footer>
      </div>
    );
  }
}
