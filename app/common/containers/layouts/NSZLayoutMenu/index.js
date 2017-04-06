import React from 'react';
import withStyles from 'withStyles';
import { translate } from 'react-i18next';
import NSZHeader from 'containers/blocks/NSZHeader';
import Disclaim from 'components/Disclaim';

import styles from './styles.scss';

@withStyles(styles)
@translate()
export default class LandingLayoutMenu extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.main}>
        <header>
          <NSZHeader />
        </header>
        <Disclaim />
        <main className={styles.main__in}>
          { children }
        </main>
        <footer>
          <div className={styles.footer}>
            ©2017 All Rights Recerved
          </div>
        </footer>
      </div>
    );
  }
}
