import React from 'react';
// import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import validate, { ErrorMessage } from 'modules/validate';

import withStyles from 'withStyles';

import Input, { DateInput, SelectInput } from 'components/Input';
// import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import { H3 } from 'components/Title';
// import Addresses from 'containers/forms/Addresses';

// import { getDoctors } from 'reducers';

import add from 'public/images/add.svg';
import styles from './styles.scss';

const category = ['PD', 'вища', 'середня'];
const level = ['PD', 'вища', 'середня'];

@reduxForm({
  form: 'doctorRegistrationStep1',
  validate: validate({
    birth_place: {
      required: true,
    },
    gender: {
      required: true,
    },
    'documents.number': {
      required: true,
    },
    'REGISTRATION.addresses.city': {
      required: true,
    },
    'REGISTRATION.addresses.street': {
      required: true,
    },
    'REGISTRATION.addresses.building': {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    'phones.mobile': {
      required: true,
      phone_number: /^0\d{9}$/,
    },
  }),
  initialValues: {
    gender: 'FEMALE',
  },
})
@withStyles(styles)
export default class CreateDoctorStep2 extends React.Component {

  state = {
    addDocument: false,
    addGuardian: false,
    gender: 'male',
    disabled: true,
  };
  onChange(value) {
    this.setState({
      value,
    });
  }
  render() {
    const { handleSubmit, showPopup } = this.props;

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form__title}>
          <H3>Лікар</H3>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Атестована спеціальність" type="text" name="birth_place" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <Field
              theme="medium"
              component={SelectInput}
              name="doctor"
              placeholder="Категорія"
              options={category.map(item => ({
                title: item || '', name: item,
              }))}
            >
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Дата атестації" placeholder="ДД/ММ/РР" name="documents.issue_date" component={DateInput}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <Field placeholder="Номер сертифікату" type="text" name="birth_place" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__plus}>
          <a>
            <img src={add} alt="" />
            <span>Додати атестацію</span>
          </a>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Назва навчального закладу" type="text" name="documents.issued_by" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field
              theme="medium"
              component={SelectInput}
              name="doctor"
              placeholder="Рівень освіти"
              options={level.map(item => ({
                title: item || '', name: item,
              }))}
            >
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <Field
              theme="medium"
              component={SelectInput}
              name="doctor"
              placeholder="Категорія"
              options={level.map(item => ({
                title: item || '', name: item,
              }))}
            >
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Рік початку" placeholder="ДД/ММ/РР" name="documents.issue_date" component={DateInput}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Рік випуску" placeholder="ДД/ММ/РР" name="documents.issue_date" component={DateInput}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Номер диплому" type="text" name="documents.issued_by" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__plus}>
          <a>
            <img src={add} alt="" />
            <span>Додати освіту</span>
          </a>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="ЄДРПОУ" type="text" name="documents.issued_by" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Назва закладу" type="text" name="documents.issued_by" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Посада" type="text" name="birth_place" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Дата вступу" placeholder="ДД/ММ/РР" name="documents.issue_date" component={DateInput}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field
              theme="medium"
              component={SelectInput}
              name="doctor"
              placeholder="Спеціальність"
              options={level.map(item => ({
                title: item || '', name: item,
              }))}
            >
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__plus}>
          <a>
            <img src={add} alt="" />
            <span>Додати місце роботи</span>
          </a>
        </div>
        <div className={styles.form__btns}>
          <Button to="/doctor">Назад</Button>
          <Button type="submit">Зберегти зміни</Button>
          <Button onClick={() => showPopup()} theme="blue">Верифікувати</Button>
        </div>
      </form>
    );
  }
}

