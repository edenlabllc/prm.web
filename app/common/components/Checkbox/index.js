import React from 'react';
import withStyles from 'withStyles';
import classnames from 'classnames';

import { ErrorMessages } from 'modules/validate';
import styles from './styles.scss';

const THEMES = ['default'];

@withStyles(styles)
export default class Checkbox extends React.Component {
  get errored() {
    return (this.props.meta.touched || (this.props.meta.dirty && this.props.meta.visited))
      && !this.props.meta.active && this.props.meta.error;
  }

  render() {
    const {
      component = 'input',
      theme = THEMES[0],
      disabled,
      children,
      input,
      meta,
      checked,
      label,
      ...rest,
    } = this.props;

    return (
      <div
        className={classnames(
          styles.wrap,
          styles[`theme-${theme}`],
          meta.active && styles.active,
          disabled && styles.disabled,
          this.errored && styles.errored,
        )}
      >
        <label className={styles.label}>
          {label && <span className={styles.label}>{label}</span>}
          <div className={styles.input}>
            {
              React.createElement(component, {
                ...input,
                ...rest,
                type: 'checkbox',
                checked,
              })
            }
            <div className={styles.view}>
              <span />
            </div>

          </div>
        </label>
        <div className={styles.error}>
          { this.errored && <ErrorMessages error={meta.error}>{ children }</ErrorMessages> }
        </div>
      </div>
    );
  }
}
