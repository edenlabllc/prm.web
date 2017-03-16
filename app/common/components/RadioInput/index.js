import React, { PropTypes } from 'react';
import withStyles from 'withStyles';

import styles from './styles.scss';

export const RadioInputComponent = ({
  selected = false,
  onChange = e => e,
  disabled,
  value,
  name,
  label,
}) => (
  <label className={styles.wrap}>
    <input
      type="radio"
      {...{
        onChange: () => !disabled && onChange(value),
        checked: selected,
        value,
        name,
        disabled,
        label,
      }}
    />
    <span className={styles.view} />
    <span>{label}</span>
  </label>
);

RadioInputComponent.PropTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  onChange: PropTypes.func,
};

export default withStyles(styles)(RadioInputComponent);
