import React from 'react';

import withStyles from 'withStyles';
import { reduxForm, Field } from 'redux-form';

import Input, { DateInput, RadioButtonInput, MaskedInput } from 'components/Input';

import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import { H3 } from 'components/Title';

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
    gender: 'male',
  };
  onChange(value) {
    this.setState({
      value,
    });
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
            <Field theme="medium" placeholder="Вибрати з довідника" type="text" name="doctor" component={Input}>
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
              <div className={styles.form__row__text}>Стать</div>
              <Field
                theme="radiobtn"
                label="Жінка"
                selected={this.state.gender === 'female'}
                value="female"
                name="gender"
                component={RadioButtonInput}
                onChange={v => this.onChange(v)}
              >
                <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              </Field>
              <Field
                theme="radiobtn"
                label="Чоловік"
                selected={this.state.gender === 'male'}
                value="male"
                name="gender"
                component={RadioButtonInput}
                onChange={v => this.onChange(v)}
              >
                <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              </Field>
            </div>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Паспорт" type="text" name="documents.type" component={Input}>
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
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Область" type="text" name="addresses.area" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <Field placeholder="Місто" type="text" name="addresses.city" component={Input}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <div>
              <Field theme="s" placeholder="Вул" type="text" name="addresses.street" component={Input}>
                <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              </Field>
              <Field placeholder="Назва вулиці" type="text" name="addresses.street" component={Input}>
                <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              </Field>
            </div>
          </div>
          <div className={styles.form__row__item}>
            <div>
              <Field theme="xs" placeholder="Буд" type="text" name="addresses.building" component={Input}>
                <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              </Field>
              <Field theme="xs" placeholder="Кв" type="text" name="addresses.apartment" component={Input}>
                <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              </Field>
              <Field placeholder="Індекс" type="text" name="addresses.zip" component={Input}>
                <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              </Field>
            </div>
          </div>
        </div>

        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <H3>Адреса проживання Пацієнта</H3>
          </div>
          <div className={styles.form__row__item}>
            <div className={styles.align__right}>
              <span className={styles.form__row__text}>Співпадає з місцем реєстрації</span>
              <Field name="checked" label="Співпадає з місцем реєстрації" component={Checkbox}>
                <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              </Field>
            </div>
          </div>
        </div>
        <div className={styles.disable}>
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
          <div className={styles.form__row}>
            <div className={styles.form__row__item}>
              <div>
                <Field theme="s" placeholder="Вул" type="text" name="doctor" component={Input}>
                  <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
                </Field>
                <Field placeholder="Назва вулиці" type="text" name="doctor" component={Input}>
                  <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
                </Field>
              </div>
            </div>
            <div className={styles.form__row__item}>
              <div>
                <Field theme="xs" placeholder="Буд" type="text" name="doctor" component={Input}>
                  <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
                </Field>
                <Field theme="xs" placeholder="Кв" type="text" name="doctor" component={Input}>
                  <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
                </Field>
                <Field placeholder="Індекс" type="text" name="doctor" component={Input}>
                  <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
                </Field>
              </div>
            </div>
          </div>
          <div className={styles.form__row}>
            <div className={styles.form__row__item}>
              <Field theme="medium" placeholder="Номер мобільного" mask="+38 (111) 111-11-11" name="phones.mobile" component={MaskedInput}>
                <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              </Field>
            </div>
          </div>
          <div className={styles.form__row}>
            <div className={styles.form__row__item}>
              <Field theme="medium" placeholder="Адреса електронної пошти" name="email" component={Input}>
                <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              </Field>
            </div>
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
