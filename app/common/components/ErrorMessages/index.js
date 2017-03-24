import React from 'react';
import { translate } from 'react-i18next';
import { ErrorMessages, ErrorMessage } from 'modules/validate';

@translate()
export default class ErrorMessagesTranslated extends React.Component {
  render() {
    const { children, ...rest } = this.props;
    return (
      <ErrorMessages {...rest}>
        {children}
        <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
        <ErrorMessage when="email">Не вірно вказаний email</ErrorMessage>
        <ErrorMessage when="phone_number">Не вірно вказаний телефон</ErrorMessage>
      </ErrorMessages>
    );
  }
}
