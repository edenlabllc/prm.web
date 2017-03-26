import React from 'react';
import { Field } from 'redux-form';

import withStyles from 'withStyles';

import Input, { DateInput, SelectInput } from 'components/Input';
import Button from 'components/Button';
import { H3 } from 'components/Title';

import add from 'public/images/add.svg';
import styles from './styles.scss';

const category = ['PD', 'вища', 'середня'];
const level = ['PD', 'вища', 'середня'];

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
            <Field placeholder="Атестована спеціальність" type="text" name="birth_place" component={Input} />
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
            />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Дата атестації" placeholder="ДД/ММ/РР" name="documents.issue_date" component={DateInput} />
          </div>
          <div className={styles.form__row__item}>
            <Field placeholder="Номер сертифікату" type="text" name="birth_place" component={Input} />
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
            <Field theme="medium" placeholder="Назва навчального закладу" type="text" name="documents.issued_by" component={Input} />
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
            />
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
            />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Рік початку" placeholder="ДД/ММ/РР" name="documents.issue_date" component={DateInput} />
          </div>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Рік випуску" placeholder="ДД/ММ/РР" name="documents.issue_date" component={DateInput} />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Номер диплому" type="text" name="documents.issued_by" component={Input} />
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
            <Field theme="medium" placeholder="ЄДРПОУ" type="text" name="documents.issued_by" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Назва закладу" type="text" name="documents.issued_by" component={Input} />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Посада" type="text" name="birth_place" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Дата вступу" placeholder="ДД/ММ/РР" name="documents.issue_date" component={DateInput} />
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
            />
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

