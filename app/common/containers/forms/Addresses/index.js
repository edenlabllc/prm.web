import React from 'react';
import { Field } from 'redux-form';

import Input, { SelectInput } from 'components/Input';
import { FormRow, FormColumn } from 'components/Form';

import { ErrorMessage } from 'modules/validate';

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

export default class Addresses extends React.Component {
  render() {
    const { disabled = false } = this.props;
    return (
      <div>
        <FormRow>
          <FormColumn>
            <Field
              component={SelectInput}
              name="area"
              placeholder="Область"
              disabled={disabled}
              options={REGION.map(item => ({
                title: item, name: item,
              }))}
            />
          </FormColumn>
          <FormColumn>
            <Field placeholder="Місто" type="text" name="city" component={Input} disabled={disabled} />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <FormRow>
              <FormColumn size="1/3">
                <Field
                  disabled={disabled}
                  theme="small"
                  component={SelectInput}
                  name="street_type"
                  placeholder="Вул"
                  options={STREET.map(item => ({
                    title: item.name, name: item.name,
                  }))}
                />
              </FormColumn>
              <FormColumn size="2/3">
                <Field disabled={disabled} placeholder="Назва вулиці" type="text" name="street" component={Input} />
              </FormColumn>
            </FormRow>
          </FormColumn>
          <FormColumn>
            <FormRow>
              <FormColumn size="1/4">
                <Field
                  disabled={disabled}
                  theme="small"
                  placeholder="Буд"
                  type="text"
                  name="building"
                  component={Input}
                >
                  <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
                </Field>
              </FormColumn>
              <FormColumn size="1/4">
                <Field
                  disabled={disabled}
                  theme="small"
                  placeholder="Кв"
                  type="text"
                  name="apartment"
                  component={Input}
                >
                  <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
                </Field>
              </FormColumn>
              <FormColumn size="2/4">
                <Field disabled={disabled} theme="small" placeholder="Індекс" type="text" name="zip" component={Input}>
                  <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
                </Field>
              </FormColumn>
            </FormRow>
          </FormColumn>
        </FormRow>
      </div>
    );
  }
}
