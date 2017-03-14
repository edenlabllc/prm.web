import React from 'react';
import withStyles from 'withStyles';
import { translate } from 'react-i18next';

import styles from './styles.scss';

@translate()
@withStyles(styles)
export default class App extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        { children }
      </div>
    );
  }
}
