import React from 'react';

import withStyles from 'withStyles';
import { reduxForm, Field } from 'redux-form';

import Input, { DateInput } from 'components/Input';
import Button from 'components/Button';
import { H3 } from 'components/Title';
import Checkbox from 'components/Checkbox';

import add from 'public/images/add.svg';

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

  state = {
    addDocument: false,
    addGuardian: false,
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className={styles.form} onSubmit={() => handleSubmit()}>
        <div className={styles.form__title}>
          <H3>Лікар</H3>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Вибрати з довідника" type="text" name="doctor" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__title}>
          <H3>Пацієнт</H3>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Місто народження" type="text" name="city" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <div className={styles.default}>
              <div>Стать</div>
              <Field label="Жінка" type="checkbox" name="female" component={Checkbox}>
                <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              </Field>
              <Field label="Чоловік" type="checkbox" name="male" component={Checkbox}>
                <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              </Field>
            </div>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Паспорт" type="text" name="pasport" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <Field placeholder="Серія та номер" type="text" name="passport-number" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Виданий" type="text" name="first_name" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Дата видачі" placeholder="ДД/ММ/РР" name="birth_date" component={DateInput}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__plus}>
          <a>
            <img src={add} alt="" />
            <span>Додати документ</span>
          </a>
        </div>
        <div className={styles.form__title}>
          <H3>Адреса реєстрації Пацієнта</H3>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Область" type="text" name="doctor" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <Field placeholder="Місто" type="text" name="doctor" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__btns}>
          <Button type="submit">Зберегти зміни</Button>
          <Button onClick={() => { console.log('next step'); }} theme="blue">Далі</Button>
        </div>
      </form>
    );
  }
}
