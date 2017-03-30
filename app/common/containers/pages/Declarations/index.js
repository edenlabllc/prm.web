import React from 'react';
import withStyles from 'withStyles';
import { Link } from 'react-router';

import { H1 } from 'components/Title';
import Table from 'containers/blocks/Table';
import add from 'public/images/add.svg';

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
            <Link to="/declarations/search">
              <img src={add} alt="" />
              <span>Створити нову декларацію</span>
            </Link>
          </div>
        </div>
        <Table />
      </section>
    );
  }
}
