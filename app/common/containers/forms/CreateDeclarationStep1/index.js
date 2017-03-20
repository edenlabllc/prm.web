import React from 'react';

import withStyles from 'withStyles';
import { reduxForm, Field } from 'redux-form';

import Input, { DateInput, MaskedInput } from 'components/Input';
import Button from 'components/Button';

import validate, { ErrorMessage } from 'modules/validate';

import styles from './styles.scss';

@reduxForm({
  form: 'registrationForm',
  validate: validate({
    first_name: {
      required: true,
    },
    last_name: {
      required: true,
    },
    second_name: {
      required: true,
    },
    birth_date: {
      required: true,
    },
    national_id: {
      required: true,
      min: 10,
    },
    'phones.mobile': {
      required: true,
      phone_number: /^0\d{9}$/,
    },
  }),
})
@withStyles(styles)
export default class CreateDeclarationStep1 extends React.Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <form className={styles.form} onSubmit={() => onSubmit()}>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Прізвище" type="text" name="last_name" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <Field placeholder="По-батькові" type="text" name="second_name" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Ім’я" type="text" name="first_name" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Дата народження" placeholder="ДД/ММ/РР" name="birth_date" component={DateInput}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="ІПН" type="number" name="national_id" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Номер мобільного" mask="+38 (111) 111-11-11" name="phones.mobile" component={MaskedInput}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              <ErrorMessage when="phone_number">Не вірно вказаний телефон</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__btns}>
          <Button type="reset">Зберегти зміни</Button>
          <Button onClick={() => onSubmit()} theme="blue">Далі</Button>
          {
            // <Button to="/create/patient" theme="blue">Далі</Button>
          }
        </div>
      </form>
    );
  }
}
