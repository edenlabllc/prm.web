import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, FormSection, getFormValues } from 'redux-form';
import validate from 'modules/validate';
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
  'be802077-ddf0-4980-a390-6bfb513381ae': {
    updated_by: null,
    status: null,
    name: 'Alexis Ohanian',
    mpi_id: null,
    licenses: null,
    jobs: null,
    id: 'be802077-ddf0-4980-a390-6bfb513381ae',
    education: null,
    created_by: null,
    certificates: null,
    active: false,
    type: 'doctor',
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
    'addresses.REGISTRATION.city': {
      required: true,
    },
    'addresses.REGISTRATION.street': {
      required: true,
    },
    'addresses.REGISTRATION.building': {
      required: true,
    },
    'addresses.RESIDENCE.city': {
      required: (props, value, values) => !values.checked,
    },
    'addresses.RESIDENCE.street': {
      required: (props, value, values) => !values.checked,
    },
    'addresses.RESIDENCE.building': {
      required: (props, value, values) => !values.checked,
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
@connect(state => ({
  values: getFormValues('personRegistrationStep2')(state),
}))
@withStyles(styles)
export default class UpdateDeclarationStep2 extends React.Component {
  render() {
    const { handleSubmit, showPopup, values, checked = false } = this.props;

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        {
          checked && (
            <div className={styles.form__row}>
              <div className={styles.form__row__item}>
                <span className={styles.form__row__text}>
                  Пацієнт дав згоду на розірвання попередньої декларації
                </span>
                <Field
                  label="Пацієнт дав згоду на розірвання попередньої декларації"
                  name="agree"
                  component={Checkbox}
                />
              </div>
            </div>
          )
        }
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
            />
          </div>
        </div>
        <div className={styles.form__title}>
          <H3>Пацієнт</H3>
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
          <H3>Адреса реєстрації Пацієнта</H3>
        </div>

        <FormSection name="addresses.REGISTRATION">
          <Addresses />
        </FormSection>

        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <H3>Адреса проживання Пацієнта</H3>
          </div>
          <div className={styles.form__row__item}>
            <div className={styles.align__right}>
              <span className={styles.form__row__text}>Співпадає з місцем реєстрації</span>
              <Field name="checked" label="Співпадає з місцем реєстрації" component={Checkbox} />
            </div>
          </div>
        </div>
        <div className={styles.disable}>
          <FormSection name="addresses.RESIDENCE">
            <Addresses disabled={values.checked} />
          </FormSection>
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
          <Button disabled={!values.agree} onClick={() => showPopup()} theme="blue">Далі</Button>
        </div>
      </form>
    );
  }
}

