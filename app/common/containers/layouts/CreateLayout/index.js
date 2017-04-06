import React from 'react';
import withStyles from 'withStyles';
import { Link } from 'react-router';

import styles from './styles.scss';

@withStyles(styles)
export default class CreateLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <section className={styles.create}>
        <header className={styles.create__header}>
          <Link to="/declarations">Повернутися на Головну</Link>
        </header>
        <main className={styles.create__content}>
          { children }
          <div className={styles.disclaim}>
            <span className={styles.disclaim__red}>Увага! Демо станом на 06 квітня 2017!</span>

            Цей макет було створено для демонстрації логіки процесів
            eHealth в частині створення декларацій
            <span>та не є продуктом що буде запущено в експлуатацію.</span>
            Платформа eHealth має забезпечити
            роботу з реєстрами eHealth з використанням API. Автоматизація
            процесів лікарів, співробітників медичних закладів та
            інших процесів проводиться постачальниками Медичних
            Інформаційних Систем.
          </div>
        </main>
      </section>
    );
  }
}
