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
        </main>
      </section>
    );
  }
}
