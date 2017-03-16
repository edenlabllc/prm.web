import React from 'react';
import withStyles from 'withStyles';

import { H1 } from 'components/Title';
import CreateDeclarationForm from 'containers/forms/CreateDeclarationStep2';

import styles from './styles.scss';

@withStyles(styles)
export default class CreateDeclarationStep2 extends React.Component {
  render() {
    return (
      <section className={styles.declaration}>
        <div className={styles.declaration__title}>
          <H1>Створити нову декларацію. Крок 2</H1>
        </div>
        <div className={styles.declaration__form}>
          <CreateDeclarationForm onSubmit={() => {}} />
        </div>
      </section>
    );
  }
}
