import React from 'react';
import withStyles from 'withStyles';

import styles from './styles.scss';

@withStyles(styles)
export default class StartPage extends React.Component {
  render() {
    return (
      <section className={styles.section} />
    );
  }
}
