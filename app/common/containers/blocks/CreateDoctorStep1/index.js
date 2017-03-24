import React from 'react';
import { connect } from 'react-redux';
// import { show } from 'components/Popup';
import withStyles from 'withStyles';


import { H1 } from 'components/Title';
import CreateDoctorForm from 'containers/forms/CreateDoctorStep1';


// import { onCreate } from './redux';

import styles from './styles.scss';

@connect(state => state)
@withStyles(styles)
export default class CreateDoctorStep1 extends React.Component {
  render() {
    const { onCreate } = this.props;
    return (
      <section className={styles.declaration}>
        <div className={styles.declaration__title}>
          <H1>Створити профіль лікаря. Крок 1</H1>
        </div>
        <div className={styles.declaration__form}>
          <CreateDoctorForm
            onSubmit={onCreate}
            disabled
          />
        </div>
      </section>
    );
  }
}
