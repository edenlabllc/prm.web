import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'withStyles';

import { Field, reduxForm, getFormValues } from 'redux-form';
import Input, { DateInput, MaskedInput, SelectInput } from 'components/Input';
import Button from 'components/Button';
import { H3 } from 'components/Title';
import Addresses from 'containers/forms/Addresses';

import add from 'public/images/add.svg';
import styles from './styles.scss';

const country = ['1', '2', '3'];

@reduxForm({
  form: 'clinicRegistrationStep3',
})
@connect(state => ({
  values: getFormValues('clinicRegistrationStep3')(state),
}))
@withStyles(styles)
export default class CreateClinicStep3 extends React.Component {
  render() {
    // const { values } = this.props;

    return (
      <form className={styles.form}>
        <div className={styles.form__title}>
          <H3>Дані про відокремлені підрозділи</H3>
        </div>
        <Addresses />
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Назва" type="text" name="name" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Номер ВП" type="text" name="name" component={Input} />
          </div>
        </div>
        <div className={styles.form__plus}>
          <a>
            <img src={add} alt="" />
            <span>Додати підрозділ</span>
          </a>
        </div>
        <div className={styles.form__title}>
          <H3>Державна акредитація</H3>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <div className={styles.form__row__item}>
              <Field
                theme="medium"
                component={SelectInput}
                name="country"
                placeholder="Категорія"
                options={country.map(item => ({
                  title: item, name: item,
                }))}
              />
            </div>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Дата" placeholder="ДД/ММ/РР" name="documents.issue_date" component={DateInput} />
          </div>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Термін дії до" placeholder="ДД/ММ/РР" name="documents.issue_date" component={DateInput} />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Номер наказу МОЗ" type="text" name="name" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Дата наказу" placeholder="ДД/ММ/РР" name="documents.issue_date" component={DateInput} />
          </div>
        </div>
        <div className={styles.form__title}>
          <H3>Ліцензія</H3>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Серія" type="text" name="name" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Номер ліцензії" type="text" name="name" component={Input} />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Дата видачі" placeholder="ДД/ММ/РР" name="documents.issue_date" component={DateInput} />
          </div>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Орган" placeholder="ДД/ММ/РР" name="documents.issue_date" component={DateInput} />
          </div>
        </div>
        <div className={styles.form__title}>
          <H3>Контакти закладу</H3>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <div className={styles.form__row__item}>
              <Field
                theme="medium"
                component={SelectInput}
                name="country"
                placeholder="Тип"
                options={country.map(item => ({
                  title: item, name: item,
                }))}
              />
            </div>
          </div>
        </div>
        <div className={styles.form__plus}>
          <a>
            <img src={add} alt="" />
            <span>Додати контакти</span>
          </a>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Номер мобільного" mask="+38 (111) 111-11-11" name="phones.mobile" component={MaskedInput} />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Адреса електронної пошти" name="email" component={Input} />
          </div>
        </div>
        <div className={styles.form__plus} />
        <div className={styles.form__btns}>
          <Button type="/clinicStep2">Назад</Button>
          <Button type="submit">Зберегти зміни</Button>
          <Button to="/" theme="blue">Далі</Button>
        </div>
      </form>
    );
  }
}
