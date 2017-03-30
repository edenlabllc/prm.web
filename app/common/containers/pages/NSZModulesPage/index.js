import React from 'react';
import withStyles from 'withStyles';
import { Link } from 'react-router';

import styles from './styles.scss';

@withStyles(styles)
export default class NSZModulesPage extends React.Component {
  render() {
    return (
      <section className={styles.section}>
        <div className={styles.section__in}>
          <div className={styles.section__title}>
            Оберіть “Адміністративний модуль” однієї із систем
          </div>
          <div className={styles.section__modules}>
            <Link to="/clinics/create">
              <div />
            </Link>
            <Link to="/clinics/create">
              <div />
            </Link>
            <Link to="/clinics/create">
              <div />
            </Link>
            <Link to="/clinics/create">
              <div />
            </Link>
            <Link to="/clinics/create">
              <div />
            </Link>
            <Link to="/clinics/create">
              <div />
            </Link>
            <Link to="/clinics/create">
              <div />
            </Link>
            <Link to="/clinics/create">
              <div />
            </Link>
            <Link to="/clinics/create">
              <div />
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
