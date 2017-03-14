import React from 'react';
import withStyles from 'withStyles';

import { H1 } from 'components/Title';

import styles from './styles.scss';

@withStyles(styles)
export default class Declarations extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.title}>
          <H1>Декларації</H1>
        </div>
      </div>
    );
  }
}
