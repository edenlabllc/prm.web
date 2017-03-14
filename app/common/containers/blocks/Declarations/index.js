import React from 'react';
import withStyles from 'withStyles';

import { H1 } from 'components/Title';
import Table from 'components/Table';
import add from './images/add.svg';

import styles from './styles.scss';

@withStyles(styles)
export default class Declarations extends React.Component {
  render() {
    return (
      <section className={styles.declaration}>
        <div className={styles.declaration__title}>
          <H1>Декларації</H1>
        </div>
        <div className={styles.options}>
          <div className={styles.options__new}>
            <a onClick={() => (console.log('click me!'))}>
              <img src={add} alt="" />
              <span>Створити нову публікацію</span>
            </a>
          </div>

        </div>
        <Table />
      </section>
    );
  }
}
