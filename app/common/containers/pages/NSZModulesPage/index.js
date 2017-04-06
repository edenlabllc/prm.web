import React from 'react';
import withStyles from 'withStyles';
import { Link } from 'react-router';
import mis1 from './images/mis_1.png';
import mis2 from './images/mis_2.png';
import mis3 from './images/mis_3.png';

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
              <img className={styles.img} src={mis1} alt="" />
            </Link>
            <Link to="/clinics/create">
              <img className={styles.img} src={mis2} alt="" />
            </Link>
            <Link to="/clinics/create">
              <img className={styles.img} src={mis3} alt="" />
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
