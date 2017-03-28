import React from 'react';
import withStyles from 'withStyles';

import styles from './styles.scss';

@withStyles(styles)
export default class MISLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <section>
        <div className={styles.wrapper}>
          { children }
        </div>
        <div className={styles.footer}>
          ©2017 All Rights Recerved
        </div>
      </section>
    );
  }
}
