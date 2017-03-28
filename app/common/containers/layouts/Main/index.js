import React from 'react';
import withStyles from 'withStyles';
import { translate } from 'react-i18next';
import Header from 'containers/blocks/Header';

import styles from './styles.scss';

@withStyles(styles)
@translate()
export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.main}>
        <div className={styles.main__wrap}>
          <header>
            <Header />
          </header>
          <main className={styles.main__in}>
            { children }
          </main>
        </div>
      </div>
    );
  }
}
