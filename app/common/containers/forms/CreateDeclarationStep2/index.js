import React from 'react';
// import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import validate, { ErrorMessage } from 'modules/validate';
import classnames from 'classnames';

import withStyles from 'withStyles';

import Input, { DateInput, RadioButtonInput, MaskedInput, SelectInput } from 'components/Input';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import { H3 } from 'components/Title';
import Addresses from 'containers/forms/Addresses';

// import { getDoctors } from 'reducers';

import add from 'public/images/add.svg';
import styles from './styles.scss';

const doctors = {
  '998d6ebe-12ac-4484-91a4-9a0356c3e827': {
    updated_by: null,
    status: null,
    name: 'Alexis Ohanian',
    mpi_id: null,
    licenses: null,
    jobs: null,
    id: '998d6ebe-12ac-4484-91a4-9a0356c3e827',
    education: null,
    created_by: null,
    certificates: null,
    active: false,
    type: 'doctor',
  },
  '52fe7f70-d33c-49f0-8706-b7cbd8c64fc3': {
    updated_by: null,
    status: null,
    name: 'Petro Lymych',
    mpi_id: null,
    licenses: null,
    jobs: null,
    id: '52fe7f70-d33c-49f0-8706-b7cbd8c64fc3',
    education: null,
    created_by: null,
    certificates: null,
    active: false,
  },
  '3674753a-4a2e-43f9-8d38-ef8b871bcf28': {
    updated_by: null,
    status: null,
    name: 'Ievgen Pyrogov',
    mpi_id: null,
    licenses: null,
    jobs: null,
    id: '3674753a-4a2e-43f9-8d38-ef8b871bcf28',
    education: null,
    created_by: null,
    certificates: null,
    active: false,
  },
  '03a5092d-a354-46da-82aa-2ba3d2830ffc': {
    updated_by: null,
    status: null,
    name: 'Dmytro Ivchenko',
    mpi_id: null,
    jobs: null,
    id: '03a5092d-a354-46da-82aa-2ba3d2830ffc',
    created_by: null,
    active: false,
  },
};


@reduxForm({
  form: 'personRegistrationStep2',
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
export default class CreateDeclarationStep2 extends React.Component {

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
            <Field
              theme="medium"
              component={SelectInput}
              name="doctor"
              placeholder="Вибрати з довідника"
              options={Object.keys(doctors).map(item => ({
                title: doctors[item].name || '', name: item,
              }))}
            >
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__title}>
          <H3>Пацієнт</H3>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Місто народження" type="text" name="birth_place" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
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
                >
                  <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
                </Field>
              </div>
              <div className={styles.s}>
                <Field
                  theme="radiobtn"
                  label="Чоловік"
                  type="radio"
                  value="MALE"
                  name="gender"
                  component={RadioButtonInput}
                >
                  <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
                </Field>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Паспорт" disabled={true} type="text" value="PASSPORT" name="documents.type" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <Field placeholder="Серія та номер" type="text" name="documents.number" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Виданий" type="text" name="documents.issued_by" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <Field theme="space-between" label="Дата видачі" placeholder="ДД/ММ/РР" name="documents.issue_date" component={DateInput}>
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

        <Addresses
          disabled={false}
          name="REGISTRATION"
        />

        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <H3>Адреса проживання Пацієнта</H3>
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
              >
                <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              </Field>
            </div>
          </div>
        </div>
        <div className={styles.disable}>
          <Addresses disabled={this.state.disabled} name="RESIDENCE" />
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Номер мобільного" mask="+38 (111) 111-11-11" name="phones.mobile" component={MaskedInput}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              <ErrorMessage when="phone_number">Не вірно вказаний телефон</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Адреса електронної пошти" name="email" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              <ErrorMessage when="email">Не вірно вказаний email</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__btns}>
          <Button type="submit">Зберегти зміни</Button>
          <Button onClick={() => showPopup()} theme="blue">Далі</Button>
        </div>
      </form>
    );
  }
}

