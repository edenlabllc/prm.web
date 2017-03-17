import React, { PropTypes } from 'react';
import classnames from 'classnames';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';

import styles from './styles.scss';

export const RadioInput = ({
  input, error,
  disabled, value, name, labelText, prefix,
}) => (
  <label className={classnames(styles.wrap, prefix && styles.prefixed, error && styles.errored)}>
    {prefix && <div className={styles.prefix}>{prefix}</div>}
    <input
      type="radio"
      {...{
        ...input,
        value,
        name,
        disabled,
      }}
    />
    <span className={styles.view} />

    {labelText && <div className={styles.label}>{labelText}</div>}
  </label>
);

RadioInput.PropTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.isReqiored,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  onChange: PropTypes.func,
};

export default withStyles(styles)(RadioInput);
