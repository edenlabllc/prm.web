import React from 'react';
import withStyles from 'withStyles';

import { H1 } from 'components/Title';
import CreateClinicForm from 'containers/forms/CreateClinicStep1';

import styles from './styles.scss';

@withStyles(styles)
export default class CreateDeclarationStep1 extends React.Component {
  render() {
    const {
      onSubmit,
      invalid,
      submitting,
    } = this.props;

    return (
      <section className={styles.section}>
        <div className={styles.section__title}>
          <H1>Створити профіль Клініки. Крок 1</H1>
        </div>
        <div className={styles.section__form}>
          <CreateClinicForm
            onSubmit={onSubmit}
            valid={invalid}
            submitting={submitting}
          />
        </div>
      </section>
    );
  }
}
