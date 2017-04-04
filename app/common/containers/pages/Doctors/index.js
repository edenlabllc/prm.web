import React from 'react';
import withStyles from 'withStyles';
import { Link } from 'react-router';

import { H1 } from 'components/Title';
import Table from 'components/Table';
import add from 'public/images/add.svg';

import styles from './styles.scss';

const doctors = [{
  id: '1231233',
  name: 'Богомолець А. А.',
  birthdate: '06.1960',
  speciality: 'терапевт',
  status: 'Працює',
}, {
  id: '1231234',
  name: 'Богомолець А. А.',
  birthdate: '01.1967',
  speciality: 'педіатр',
  status: 'Працює',
}, {
  id: '2231234',
  name: 'Богомолець А. А.',
  birthdate: '06.1980',
  speciality: 'педіатр',
  status: 'Працює',
}, {
  id: '1431234',
  name: 'Иванов А. А.',
  birthdate: '06.1985',
  speciality: 'терапевт',
  status: 'Працює',
}, {
  id: '5231234',
  name: 'Иванов А. А.',
  birthdate: '04.1974',
  speciality: 'терапевт',
  status: 'Звільнено',
}];

@withStyles(styles)
export default class Doctors extends React.Component {
  render() {
    return (
      <section className={styles.doctors}>
        <div className={styles.doctors__title}>
          <H1>Реєстр лікарів</H1>
        </div>
        <div className={styles.options}>
          <div className={styles.options__new}>
            <Link to="/doctors/create">
              <img src={add} alt="" />
              <span>Створити профіль лікаря</span>
            </Link>
          </div>
        </div>
        <Table
          data={doctors}
          columns={[
            { title: 'ID', key: 'id' },
            { title: 'Ім\'я', key: 'name' },
            { title: 'Дата народження', key: 'birthdate' },
            { title: 'Спеціальність', key: 'speciality' },
            { title: 'Статус', key: 'status' },
          ]}
        />
      </section>
    );
  }
}
