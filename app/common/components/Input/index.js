import React from 'react';
import withStyles from 'withStyles';
import classnames from 'classnames';

import MaskedInputComponent from 'modules/react-nebo15-mask';
import RadioInputComponent from 'components/RadioInput';
import Select from 'components/Select';

import ErrorMessages from 'components/ErrorMessages';
import styles from './styles.scss';

const THEMES = ['default', 'space-between', 'radiobtn', 'medium', 'checkbox', 'small'];

@withStyles(styles)
export default class Input extends React.Component {
  get floated() {
    return !this.props.input.value && !this.props.meta.active;
  }
  get errored() {
    return (this.props.meta.touched || (this.props.meta.dirty && this.props.meta.visited))
      && !this.props.meta.active && this.props.meta.error;
  }

  render() {
    const {
      component = 'input',
      theme = THEMES[0],
      disabled = false,
      label,
      children,
      input,
      meta,
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
          this.floated && styles.floated,
        )}
      >
        {
          label && <label className={styles.label}>{label}</label>
        }
        <div className={styles.input}>
          {
            React.createElement(component, {
              ...input,
              ...rest,
              disabled,
              className: classnames(styles.input__el, rest.className, input.className),
            })
          }
        </div>
        <div className={styles.error}>
          { this.errored && <ErrorMessages error={meta.error}>{ children }</ErrorMessages> }
        </div>
      </div>
    );
  }
}

export const Textarea = props =>
  <Input component="textarea" {...props} />;

export const MaskedInput = props =>
  <Input component={MaskedInputComponent} {...props} />;

export const RadioButtonInput = props =>
  <Input component={RadioInputComponent} {...props} />;

export const DateInput = props =>
  <Input type="date" {...props} />;

export const RadioInput = props => (
  <Input
    component={RadioInputComponent}
    selected={props.checked}
    value={props.value}
    {...props}
  />
);

export const GroupRadioInput = ({ options, componentGroup = 'span', component = RadioInput, ...rest }) =>
  React.createElement(componentGroup, {}, options.map(({ value, ...inputRest }) => (
    <Input
      {...rest}
      {...inputRest}
      key={value}
      value={value}
      component={component}
    />
  )
));

export const SelectInput = props =>
  <Input component={Select} {...props} active={props.input.value} />;
