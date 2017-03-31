import React from 'react';
import withStyles from 'withStyles';

import styles from './styles.scss';

@withStyles(styles)
export default class Table extends React.Component {
  render() {
    const { data = [], columns = [], keyColumn } = this.props;

    return (
      <section className={styles.wrap}>
        <table className={styles.table}>
          <thead className={styles.table__header}>
            <tr>
              { columns.map(({ key, title, ...rest }) => <th key={key} {...rest}>{title}</th>)}
            </tr>
          </thead>
          <tbody className={styles.table__body}>
            {
              data.map((item, idx) => (
                <tr key={keyColumn ? item[keyColumn] : idx}>
                  { columns.map(({ key }) => (//eslint-disable-line
                    <td key={key}>{item[key]}</td>
                  ))}
                </tr>
              ))
          }
          </tbody>
        </table>
      </section>
    );
  }
}
