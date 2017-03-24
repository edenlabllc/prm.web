import React from 'react';
// import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import validate from 'modules/validate';
import classnames from 'classnames';

import withStyles from 'withStyles';

import Input, { DateInput, RadioButtonInput, MaskedInput } from 'components/Input';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import { H3 } from 'components/Title';
import Addresses from 'containers/forms/Addresses';

// import { getDoctors } from 'reducers';

import add from 'public/images/add.svg';
import styles from './styles.scss';


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
export default class CreateDoctorStep1 extends React.Component {

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
    const { handleSubmit } = this.props;

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form__title}>
          <H3>Персональні дані</H3>
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
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Місто народження" type="text" name="birth_place" component={Input} />
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
            <Field placeholder="Паспорт" disabled={true} type="text" value="PASSPORT" name="documents.type" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field placeholder="Серія та номер" type="text" name="documents.number" component={Input} />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Виданий" type="text" name="documents.issued_by" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Дата видачі" placeholder="ДД/ММ/РР" name="documents.issue_date" component={DateInput} />
          </div>
        </div>
        <div className={styles.form__plus}>
          <a>
            <img src={add} alt="" />
            <span>Додати документ</span>
          </a>
        </div>
        <div className={styles.form__title}>
          <H3>Адреса реєстрації Лікаря</H3>
        </div>

        <Addresses
          disabled={false}
          name="REGISTRATION"
        />

        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <H3>Адреса проживання Лікаря</H3>
          </div>
          <div className={styles.form__row__item}>
            <div className={styles.align__right}>
              <span className={styles.form__row__text}>Співпадає з місцем реєстрації</span>
              <Field
                name="checked"
                checked={this.state.disabled}
                label="Співпадає з місцем реєстрації"
                component={Checkbox}
                onClick={() => this.setState({
                  disabled: !this.state.disabled,
                })}
              />
            </div>
          </div>
        </div>
        <div className={styles.disable}>
          <Addresses disabled={this.state.disabled} name="RESIDENCE" />
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
        <div className={styles.form__btns}>
          <Button type="submit">Зберегти зміни</Button>
          <Button to="/doctorsStep2" theme="blue">Далі</Button>
        </div>
      </form>
    );
  }
}

