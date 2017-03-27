import React from 'react';
import withStyles from 'withStyles';

import { Link } from 'react-router';

import styles from './styles.scss';

const NAV_LIST = [{
  link: '/declarations',
  title: 'Декларації',
}, {
  link: '/clinic',
  title: 'Профіль кліники',
}, {
  link: '/doctors',
  title: 'Реєстр Лікарів',
}, {
  link: '/patients',
  title: 'Пацієнти',
}, {
  link: '/payments',
  title: 'Розрахунки',
}];


@withStyles(styles)
export default class Nav extends React.Component {
  render() {
    return (
      <div className={styles.nav}>
        <ul className={styles.nav__in}>
          {
            NAV_LIST.map(item => (
              <li
                key={item.link}
                className={styles.nav__item}
              >
                <Link to={item.link} activeClassName={styles['is-active']}>
                  {item.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
