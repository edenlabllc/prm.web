import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'withStyles';
import classnames from 'classnames';
import { Field, reduxForm, getFormValues } from 'redux-form';
import Input, { DateInput, MaskedInput, SelectInput, RadioButtonInput } from 'components/Input';
import Button from 'components/Button';
import { H3 } from 'components/Title';

import add from 'public/images/add.svg';
import styles from './styles.scss';

const country = ['ua', 'ru', 'en'];

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
            <Field
              theme="medium"
              component={Input}
              name="country"
              placeholder="Місто народження"
            />
          </div>
          <div className={styles.form__row__item}>
            <div>
              <div
                className={
                  classnames(
                    styles.form__row__text,
                    styles.s,
                  )
                }
              >Стать</div>
              <div className={styles.s}>
                <Field
                  theme="radiobtn"
                  label="Жінка"
                  type="radio"
                  value="FEMALE"
                  name="gender"
                  component={RadioButtonInput}
                />
              </div>
              <div className={styles.s}>
                <Field
                  theme="radiobtn"
                  label="Чоловік"
                  type="radio"
                  value="MALE"
                  name="gender"
                  component={RadioButtonInput}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <div className={styles.form__row__item}>
              <Field
                theme="medium"
                component={SelectInput}
                name="country"
                placeholder="Паспорт"
                disabled={true}
                options={country.map(item => ({
                  title: item, name: item,
                }))}
              />
            </div>
          </div>
          <div className={styles.form__row__item}>
            <Field placeholder="Серія та номер" type="text" name="name" component={Input} />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="ІНН" type="number" name="national_id" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field placeholder="номер ID карти" type="text" name="name" component={Input} />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Номер мобільного" mask="+38 (111) 111-11-11" name="phones.mobile" component={MaskedInput} />
          </div>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Адреса електронної пошти" name="email" component={Input} />
          </div>
        </div>
        <div className={styles.form__plus} />
        <div className={styles.form__btns}>
          <Button type="/clinic">Назад</Button>
          <Button type="submit">Зберегти зміни</Button>
          <Button to="/clinicStep3" theme="blue">Далі</Button>
        </div>
      </form>
    );
  }
}

