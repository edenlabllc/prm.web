import React from 'react';
import withStyles from 'withStyles';

import { Link } from 'react-router';

import styles from './styles.scss';

const NAV_LIST = [{
  link: '/modules',
  title: 'Головна',
}, {
  link: '/project',
  title: 'Про проект',
}, {
  link: '/aims',
  title: 'Цілі',
}, {
  link: '/about',
  title: 'Про нас',
}, {
  link: '/contact',
  title: 'Контакти',
}];


@withStyles(styles)
export default class Main extends React.Component {
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
