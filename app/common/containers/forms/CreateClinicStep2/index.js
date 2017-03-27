import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'withStyles';
import { Field, reduxForm, getFormValues } from 'redux-form';
import Input, { DateInput, MaskedInput } from 'components/Input';
import Button from 'components/Button';
import { H3 } from 'components/Title';

import add from 'public/images/add.svg';
import styles from './styles.scss';


@reduxForm({
  form: 'clinicRegistrationStep2',
})
@connect(state => ({
  values: getFormValues('clinicRegistrationStep2')(state),
}))
@withStyles(styles)
export default class CreateClinicStep1 extends React.Component {
  render() {
    // const { values } = this.props;

    return (
      <form className={styles.form}>
        <div className={styles.form__title}>
          <H3>Перелік засновників (учасників)</H3>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="найменування або ПІБ" type="text" name="name" component={Input} />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Місцезнаходження" type="text" name="place" component={Input} />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="ідентифікаційний код або ЄДРПОУ" type="text" name="birth_place" component={Input} />
          </div>
        </div>
        <div className={styles.form__plus}>
          <a>
            <img src={add} alt="" />
            <span>Додати засновника</span>
          </a>
        </div>
        <div className={styles.form__title}>
          <H3>Керівник підписант</H3>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Прізвище" type="text" name="last_name" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field placeholder="Ім’я" type="text" name="first_name" component={Input} />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="По-батькові" type="text" name="second_name" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field
              theme="space-between"
              label="Дата народження"
              placeholder="ДД/ММ/РР"
              name="birth_date"
              component={DateInput}
            />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="ІПН" type="number" name="national_id" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Номер мобільного" mask="+38 (111) 111-11-11" name="phones.number" component={MaskedInput} />
          </div>
        </div>
        <div className={styles.form__btns}>
          <Button type="/clinic">Назад</Button>
          <Button type="submit">Зберегти зміни</Button>
          <Button to="/clinicStep3" theme="blue">Далі</Button>
        </div>
      </form>
    );
  }
}

