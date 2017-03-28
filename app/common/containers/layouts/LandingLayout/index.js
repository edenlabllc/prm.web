import React from 'react';
import withStyles from 'withStyles';

import styles from './styles.scss';

@withStyles(styles)
export default class LandingLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <section className={styles.wrapper}>
        { children }
      </section>
    );
  }
}
