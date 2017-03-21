import React from 'react';
import { connect } from 'react-redux';

import withStyles from 'withStyles';
import classnames from 'classnames';

import { getDeclarations } from 'reducers';
import { getDeclarationList } from './redux';

import styles from './styles.scss';

// const LIST_BODY = [{
//   declarationId: 758857,
//   medicalID: 758857,
//   patienceName: 'Братко Святослав',
//   medical: 'Київська обласна клінична лікарня №8',
//   status: 'Підписано',
// }, {
//   declarationId: 857759,
//   medicalID: 857759,
//   patienceName: 'Камєнєв-Жмойской Євлампій',
//   medical: 'Центральна міська лікарня, м.Ірпінь',
//   status: 'Підписано',
// }, {
//   declarationId: 784865,
//   medicalID: 784865,
//   patienceName: 'Пащук Микола',
//   medical: 'Київська обласна лікарня №2',
//   status: 'Не підписано',
// }, {
//   declarationId: 647539,
//   medicalID: 647539,
//   patienceName: 'Копійчук Володимир',
//   medical: 'Олександрівська клінічна лікарня м. Києва',
//   status: 'Підписано',
// }, {
//   declarationId: 890486,
//   medicalID: 890486,
//   patienceName: 'Гуляєва-Зощенко Катерина',
//   medical: 'Національна дитяча спеціалізована лікарня «ОХМАТДИТ»',
//   status: 'Не підписано',
// }];

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
              <th>ПІБ пацієнта</th>
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
                    {item.start_date}
                  </td>
                  <td>
                    {item.end_date}
                  </td>
                  <td
                    className={
                      classnames(
                        styles.table__status_color,
                        item.status === 'Підписано' && styles.table__status_color_green,
                        item.status === 'Не підписано' && styles.table__status_color_blue,
                      )
                    }
                  >
                    {item.status}
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
