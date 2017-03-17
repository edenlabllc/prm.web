import React from 'react';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';

import withStyles from 'withStyles';
import classnames from 'classnames';

import { getDeclarationList } from './redux';

import styles from './styles.scss';

const LIST_BODY = [{
  declarationId: 758857,
  medicalID: 758857,
  patienceName: 'Братко Святослав',
  medical: 'Київська обласна клінична лікарня №8',
  status: 'Підписано',
}, {
  declarationId: 857759,
  medicalID: 857759,
  patienceName: 'Камєнєв-Жмойской Євлампій',
  medical: 'Центральна міська лікарня, м.Ірпінь',
  status: 'Підписано',
}, {
  declarationId: 784865,
  medicalID: 784865,
  patienceName: 'Пащук Микола',
  medical: 'Київська обласна лікарня №2',
  status: 'Не підписано',
}, {
  declarationId: 647539,
  medicalID: 647539,
  patienceName: 'Копійчук Володимир',
  medical: 'Олександрівська клінічна лікарня м. Києва',
  status: 'Підписано',
}, {
  declarationId: 890486,
  medicalID: 890486,
  patienceName: 'Гуляєва-Зощенко Катерина',
  medical: 'Національна дитяча спеціалізована лікарня «ОХМАТДИТ»',
  status: 'Не підписано',
}];

@provideHooks({
  fetch: ({ dispatch }) => dispatch(getDeclarationList()),
})
@connect(state => state, { getDeclarationList })
@withStyles(styles)
export default class Table extends React.Component {

  componentDidMount() {
    this.props.getDeclarationList();
  }

  render() {
    const { data = LIST_BODY } = this.props;

    return (
      <section>
        <table className={styles.table}>
          <thead className={styles.table__header}>
            <tr>
              <th>ID декларації</th>
              <th>MED ID</th>
              <th>Прізвище та ім’я пацієнта</th>
              <th>Медичний заклад</th>
              <th>статус декларації</th>
            </tr>
          </thead>
          <tbody className={styles.table__body}>
            {
            data.map(item => (
              <tr key={item.declarationId}>
                <td>
                  {item.declarationId}
                </td>
                <td>
                  {item.medicalID}
                </td>
                <td>
                  {item.patienceName}
                </td>
                <td>
                  {item.medical}
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
            ))
          }
          </tbody>
        </table>
      </section>
    );
  }
}
