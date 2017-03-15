import React from 'react';

import withStyles from 'withStyles';
import { reduxForm, Field } from 'redux-form';

import Input, { DateInput } from 'components/Input';
import Button from 'components/Button';

import validate, { ErrorMessage } from 'modules/validate';

import styles from './styles.scss';

@reduxForm({
  form: 'card',
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
  }),
  initialValues: {
    primary: true,
  },
})
@withStyles(styles)
export default class CreateDeclarationStep1 extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form className={styles.form} onSubmit={() => handleSubmit()}>
        <div className={styles.form__row}>
          <Field placeholder="Прізвище" type="text" name="last_name" component={Input}>
            <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
          </Field>
          <Field placeholder="По-батькові" type="text" name="second_name" component={Input}>
            <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
          </Field>
        </div>
        <div className={styles.form__row}>
          <Field placeholder="Ім’я" type="text" name="first_name" component={Input}>
            <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
          </Field>
          <Field theme="small" label="Дата народження" mask="ДД/ММ/РР" name="birth_date" component={DateInput}>
            <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
          </Field>
        </div>
        <div className={styles.form__row}>
          <Field placeholder="ІПН" type="number" name="national_id" component={Input}>
            <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
          </Field>
        </div>
        <div className={styles.form__btns}>
          <Button type="submit">Зберегти зміни</Button>
          <Button to="profile" onClick={() => { console.log('next step'); }} theme="blue">Далі</Button>
        </div>
      </form>
    );
  }
}
