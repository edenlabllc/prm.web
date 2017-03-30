import React from 'react';
import withStyles from 'withStyles';
import classnames from 'classnames';
import { Link } from 'react-router';

import logo from './img/logo.svg';

import styles from './styles.scss';

@withStyles(styles)
export default class MainPage extends React.Component {
  render() {
    return (
      <section className={styles.section}>
        <div className={styles.section__header}>
          <div className={styles.section__logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.section__account}>
            <div className={styles.section__account__logo} />
            <div className={styles.section__account__name}>
              Григорій Квітка
              <span className={styles.section__account__select} />
            </div>
          </div>
        </div>
        <div className={styles.section__content}>
          <div className={styles.section__item}>
            <Link to="/main">
              <div className={classnames(styles.icon, styles.icon__clinic)} alt="" />
              <p className={styles.title}>Медичні заклади</p>
            </Link>
          </div>
          <div className={styles.section__item}>
            <Link to="/">
              <div className={classnames(styles.icon, styles.icon__doc)} alt="" />
              <p className={styles.title}>Лікарі</p>
            </Link>
          </div>
          <div className={styles.section__item}>
            <Link to="/">
              <div className={classnames(styles.icon, styles.icon__pat)} alt="" />
              <p className={styles.title}>Пацієнти</p>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
