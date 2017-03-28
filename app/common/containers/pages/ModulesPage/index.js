import React from 'react';
import withStyles from 'withStyles';

import styles from './styles.scss';

@withStyles(styles)
export default class ModulesPage extends React.Component {
  render() {
    return (
      <section className={styles.section}>
        <div className={styles.section__in}>
          <div className={styles.section__title}>
            Оберіть “Адміністративний модуль” однієї із систем
          </div>
          <div className={styles.section__modules}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </section>
    );
  }
}
