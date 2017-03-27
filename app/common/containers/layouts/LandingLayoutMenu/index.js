import React from 'react';
import withStyles from 'withStyles';
import { translate } from 'react-i18next';
import HeaderMain from 'containers/blocks/HeaderMain';

import styles from './styles.scss';

@withStyles(styles)
@translate()
export default class LandingLayoutMenu extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.main}>
        <header>
          <HeaderMain />
        </header>
        <main className={styles.main__in}>
          { children }
        </main>
      </div>
    );
  }
}
