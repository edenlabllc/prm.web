import React from 'react';
import withStyles from 'withStyles';
import { H1 } from 'components/Title';

import styles from './styles.scss';

@withStyles(styles)
export default class ModulesPage extends React.Component {
  render() {
    return (
      <section className={styles.section}>
        <div className={styles.section__in}>
          <div className={styles.section__title}>
            <H1>Оберіть “Адміністративний модуль” однієї із систем</H1>
          </div>
          <div className={styles.section__modules}>
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
