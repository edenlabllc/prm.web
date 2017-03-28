import React from 'react';
import withStyles from 'withStyles';
import { translate } from 'react-i18next';
import Nav from 'containers/blocks/Nav';

import styles from './styles.scss';

@withStyles(styles)
@translate()
export default class NavigationLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <section>
        <Nav />
        <div className={styles.main__wrap}>
          { children }
        </div>
      </section>
    );
  }
}
