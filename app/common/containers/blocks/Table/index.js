import React from 'react';
import { connect } from 'react-redux';
import { format } from 'helpers/date';

import withStyles from 'withStyles';
import classnames from 'classnames';

import { getDeclarations } from 'reducers';
import { getDeclarationList } from './redux';

import styles from './styles.scss';

@connect(state => ({
  declarations: getDeclarations(state, state.blocks.Table.declarations),
}), { getDeclarationList })
@withStyles(styles)
export default class Table extends React.Component {

  componentDidMount() {
    this.props.getDeclarationList();
  }

  render() {
    const { declarations = [] } = this.props;

    return (
      <section>
        <table className={styles.table}>
          <thead className={styles.table__header}>
            <tr>
              <th>ID декларації</th>
              <th>ПІБ лікаря</th>
              <th>ПІБ пацієнта</th>
              <th>MPI пацієнта</th>
              <th>Діє з</th>
              <th>Діє по</th>
              <th>статус декларації</th>
            </tr>
          </thead>
          <tbody className={styles.table__body}>
            {
              declarations.map(item => (
              item.doctor && item.patient && (
                <tr key={item.id}>
                  <td>
                    {item.id}
                  </td>
                  <td>
                    {item.doctor.name}
                  </td>
                  <td>
                    {item.patient.first_name} {item.patient.last_name}
                  </td>
                  <td>
                    {item.patient_id}
                  </td>
                  <td>
                    {format(item.start_date)}
                  </td>
                  <td>
                    {format(item.end_date)}
                  </td>
                  <td
                    className={
                      classnames(
                        styles.table__status_color,
                        item.status === 'signed' && styles.table__status_color_green,
                        item.status === 'pending_signature' && styles.table__status_color_blue,
                      )
                    }
                  >
                    {item.status === 'pending_signature' && 'Не підписано' }
                    {item.status === 'signed' && 'Підписано' }
                  </td>
                </tr>
              )
            ))
          }
          </tbody>
        </table>
      </section>
    );
  }
}
