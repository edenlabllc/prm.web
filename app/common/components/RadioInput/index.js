import React from 'react';
import { Field } from 'redux-form';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';

import styles from './styles.scss';

export const RadioInput = ({
  input, label, meta, ...rest, // eslint-disable-line
}) => (
  <label className={styles.wrap}>
    <input
      type="radio"
      {...{
        ...input,
        ...rest,
      }}
    />
    <span className={styles.view} />
    {label && <span className={styles.label}>{label}</span>}
  </label>
);

export default withStyles(styles)(RadioInput);

const RadioInputGroupComponent = ({ items = [], name, label, disabled }) =>
  <div className={styles.radios}>
    <div className={styles.radios__title}>{label}</div>
    <div className={styles.radios__items}>
      { items.map(item => (
        <div key={item.value} className={styles.radios__item}>
          <Field
            {...item}
            name={name}
            type="radio"
            component={RadioInput}
            disabled={disabled}
          />
        </div>
      ))}
    </div>
  </div>;

export const RadioInputGroup = withStyles(styles)(RadioInputGroupComponent);
