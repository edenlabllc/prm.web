import React from 'react';
import { Field } from 'redux-form';
import withStyles from 'withStyles';

import Input, { SelectInput } from 'components/Input';

import { ErrorMessage } from 'modules/validate';

import styles from './styles.scss';

const STREET = [{
  name: 'Вул',
}, {
  name: 'Бул',
}, {
  name: 'Пл',
}, {
  name: 'Пр',
}];

const REGION = [
  'Вінницька область',
  'Волинська область',
  'Дніпропетровська область',
  'Донецька область',
  'Житомирська область',
  'Закарпатська область',
  'Запорізька область ',
  'Івано-Франківська область',
  'Київська область',
  'Кіровоградська область',
  'Луганська область',
  'Львівська область',
  'Миколаївська область',
  'Одеська область',
  'Полтавська область',
  'Рівненська область',
  'Сумська область',
  'Тернопільська область',
  'Харківська область',
  'Херсонська область',
  'Хмельницька область',
  'Черкаська область',
  'Чернігівська область',
  'Чернівецька область',
];

@withStyles(styles)
export default class Addresses extends React.Component {
  render() {
    const { name, disabled = false } = this.props;
    return (
      <div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field
              component={SelectInput}
              name={`${name}.addresses.area`}
              placeholder="Область"
              disabled={disabled}
              options={REGION.map(item => ({
                title: item, name: item,
              }))}
            >
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
          <div className={styles.form__row__item}>
            <Field placeholder="Місто" type="text" name={`${name}.addresses.city`} component={Input} disabled={disabled}>
              <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
            </Field>
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <div>
              <div className={styles.s}>
                <Field
                  disabled={disabled}
                  theme="small"
                  component={SelectInput}
                  name={`${name}.addresses.street_type`}
                  placeholder="Вул"
                  options={STREET.map(item => ({
                    title: item.name, name: item.name,
                  }))}
                >
                  <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
                </Field>
              </div>
              <Field disabled={disabled} placeholder="Назва вулиці" type="text" name={`${name}.addresses.street`} component={Input}>
                <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
              </Field>
            </div>
          </div>
          <div className={styles.form__row__item}>
            <div>
              <div className={styles.xs}>
                <Field
                  disabled={disabled}
                  theme="small"
                  placeholder="Буд"
                  type="text"
                  name={`${name}.addresses.building`}
                  component={Input}
                >
                  <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
                </Field>
              </div>
              <div className={styles.xs}>
                <Field
                  disabled={disabled}
                  theme="small"
                  placeholder="Кв"
                  type="text"
                  name={`${name}.addresses.apartment`}
                  component={Input}
                >
                  <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
                </Field>
              </div>
              <div className={styles.s}>
                <Field disabled={disabled} theme="small" placeholder="Індекс" type="text" name={`${name}.addresses.zip`} component={Input}>
                  <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
                </Field>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
