import React from 'react';
import withStyles from 'withStyles';

import { H1 } from 'components/Title';

import styles from './styles.scss';

@withStyles(styles)
export default class CreateDeclarationStep1 extends React.Component {
  render() {
    return (
      <section className={styles.declaration}>
        <div className={styles.declaration__header}>
          <H1>Створити нову декларцію. Крок 1</H1>
        </div>
        <div className={styles.declaration__form}>
          <div />
        </div>
      </section>
    );
  }
}
