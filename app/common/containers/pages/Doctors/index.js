import React from 'react';
import withStyles from 'withStyles';
import { Link } from 'react-router';

import { H1 } from 'components/Title';
import Table from 'containers/blocks/Table';
import add from 'public/images/add.svg';

import styles from './styles.scss';

@withStyles(styles)
export default class Doctors extends React.Component {
  render() {
    return (
      <section className={styles.doctors}>
        <div className={styles.doctors__title}>
          <H1>Реєстр лікарів</H1>
        </div>
        <div className={styles.options}>
          <div className={styles.options__new}>
            <Link to="/doctor">
              <img src={add} alt="" />
              <span>Створити профіль лікаря</span>
            </Link>
          </div>
        </div>
        <Table />
      </section>
    );
  }
}
