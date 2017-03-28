import React from 'react';
import withStyles from 'withStyles';
import moment from 'moment';

import DatePickerComponent from 'react-datepicker';
import Input from 'components/Input';
import Icon from 'components/Icon';

import styles from './lib.css';

@withStyles(styles)
export default class Datepicker extends React.Component {
  render() {
    return (<Input
      dropdownMode="select"
      {...this.props}
      theme="date"
      placeholderText="ДД/ММ/РР"
      dateFormat="DD/MM/YY"
      iconRight={<Icon name="calendar" />}
      component={DatePickerComponent}
      input={{
        ...this.props.input,
        onChange: params => this.props.input.onChange(params.format()),
        onBlur: () => this.props.input.onBlur(this.props.input.value),
      }}
      selected={this.props.input.value ? moment(this.props.input.value) : null}
    />);
  }
}
