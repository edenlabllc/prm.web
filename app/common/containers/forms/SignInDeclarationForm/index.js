import React from 'react';
import { reduxForm, Field } from 'redux-form';
import validate, { ErrorMessage } from 'modules/validate';

import withStyles from 'withStyles';

import Input from 'components/Input';
import Checkbox from 'components/Checkbox';

import styles from './styles.scss';

@reduxForm({
  form: 'signInDeclarationForm',
  validate: validate({
    password: {
      required: true,
    },
    passwordSecond: {
      required: true,
    },
  }),
})
@withStyles(styles)
export default class SignInDeclarationForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__row}>
          <Field
            type="text"
            name="password"
            placeholder="Файл з сертифікатом відкритого ключа"
            component={Input}
          >
            <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
          </Field>
        </div>
        <div className={styles.form__row}>
          <Field
            type="text"
            name="passwordSecond"
            placeholder="Пароль до закритого ключа"
            component={Input}
          >
            <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
          </Field>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__flex}>
            <Field
              name="signed"
              component={Checkbox}
            >
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
            <span>Пацієнт підписав декларацію</span>
          </div>
        </div>
      </form>
    );
  }
}
