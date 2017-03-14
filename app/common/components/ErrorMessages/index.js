import React from 'react';
import { translate } from 'react-i18next';
import { ErrorMessages, ErrorMessage } from 'modules/validate';

@translate()
export default class ErrorMessagesTranslated extends React.Component {
  render() {
    const { children, t, ...rest } = this.props;
    return (
      <ErrorMessages {...rest}>
        {children}
        <ErrorMessage when="required">{t('Required field')}</ErrorMessage>
        <ErrorMessage when="email">{t('Invalid email format')}</ErrorMessage>
      </ErrorMessages>
    );
  }
}
