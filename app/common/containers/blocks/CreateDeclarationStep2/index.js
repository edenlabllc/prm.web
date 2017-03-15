import React from 'react';
import withStyles from 'withStyles';

import { H1, H3 } from 'components/Title';
import CreateDeclarationForm from 'containers/forms/CreateDeclarationStep1';

import styles from './styles.scss';

@withStyles(styles)
export default class CreateDeclarationStep2 extends React.Component {
  render() {
    return (
      <section className={styles.declaration}>
        <div className={styles.declaration__title}>
          <H1>Створити нову декларцію. Крок 1</H1>
        </div>
        <div className={styles.declaration__form}>
          <div className={styles.declaration__form__title}>
            <H3>1. Реєстрація декларації</H3>
          </div>
          <CreateDeclarationForm onSubmit={() => {}} />
        </div>
      </section>
    );
  }
}
