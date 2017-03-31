import React from 'react';
import withStyles from 'withStyles';
import { provideHooks } from 'redial';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import classnames from 'classnames';
import { format } from 'helpers/date';
import { H1 } from 'components/Title';
import Table from 'components/Table';
import add from 'public/images/add.svg';

import * as fromReducers from 'reducers';

import { getDeclarations } from './redux';
import styles from './styles.scss';

@provideHooks({
  defer: ({ dispatch }) => dispatch(getDeclarations()),
})
@withStyles(styles)
@connect(state => ({
  declarations: fromReducers.getDeclarations(state, state.pages.Declarations.declarations),
}))
export default class Declarations extends React.Component {
  render() {
    const { declarations = [] } = this.props;
    return (
      <section className={styles.declaration}>
        <div className={styles.declaration__title}>
          <H1>Декларації</H1>
        </div>
        <div className={styles.options}>
          <div className={styles.options__new}>
            <Link to="/declarations/search">
              <img src={add} alt="" />
              <span>Створити нову декларацію</span>
            </Link>
          </div>
        </div>
        <Table
          keyColumn="id"
          data={declarations.map(item => ({
            id: `#${item.id.slice(-8)}`,
            doctor: item.doctor.name,
            patient: `${item.patient.first_name} ${item.patient.last_name}`,
            mpi: item.patient_id.slice(-8),
            dates: (<div>{format(item.start_date)} <br /> {format(item.end_date)}</div>),
            status: (
              <div
                className={
                  classnames(
                    styles.status,
                    item.status === 'signed' && styles.status_green,
                    item.status === 'pending_signature' && styles.status_blue,
                    item.status === 'closed' && styles.status_closed,
                  )
                }
              >
                { item.status === 'signed' && 'Підписано' }
                { item.status === 'closed' && 'Розірвано' }
                { item.status === 'pending_signature' && (
                  <Link to={`/declarations/${item.id}`}>Не підписано</Link>
                  )
                }
              </div>
            ),
          }))}
          columns={[
            { title: 'ID декларації', style: { width: 120 }, key: 'id' },
            { title: 'ПІБ лікаря', key: 'doctor' },
            { title: 'ПІБ пацієнта', key: 'patient' },
            { title: 'MPI пацієнта', style: { width: 110 }, key: 'mpi' },
            { title: 'Діє з - по', style: { width: 100 }, key: 'dates' },
            { title: 'Cтатус декларації', key: 'status' },
          ]}
        />
      </section>
    );
  }
}
