import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, FormSection, getFormValues } from 'redux-form';
import validate from 'modules/validate';

import Datepicker from 'components/Datepicker';
import { RadioInputGroup } from 'components/RadioInput';
import Input, { MaskedInput, SelectInput } from 'components/Input';
import Checkbox from 'components/Checkbox';
import Addresses from 'containers/forms/Addresses';

import Form, { FormBlock, FormBlockTitle, FormRow, FormColumn } from 'components/Form';

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
  form: 'createDeclarationStep2',
  validate: validate({
    birth_place: {
      required: true,
    },
    gender: {
      required: true,
    },
    'documents.PASSPORT.number': {
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
    'phones.MOBILE.number': {
      required: true,
      phone_number: /^0\d{9}$/,
    },
  }),
  initialValues: {
    gender: 'FEMALE',
  },
})
@connect(state => ({
  values: getFormValues('createDeclarationStep2')(state),
}))
export default class CreateDeclarationStep2Form extends React.Component {
  render() {
    const { handleSubmit, disabled = false, values, allowed = false } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        {
          allowed && (
            <FormBlock>
              <FormRow>
                <FormColumn>
                  <Field
                    label="Пацієнт дав згоду на розірвання попередньої декларації"
                    name="agree"
                    component={Checkbox}
                    disabled={disabled}
                  />
                </FormColumn>
              </FormRow>
            </FormBlock>
          )
        }
        <FormBlock title="Лікар">
          <FormRow>
            <FormColumn>
              <Field
                theme="medium"
                component={SelectInput}
                name="doctor"
                placeholder="Вибрати з довідника"
                options={Object.keys(doctors).map(item => ({
                  title: doctors[item].name || '', name: item,
                }))}
                disabled={disabled}
              />
            </FormColumn>
          </FormRow>
        </FormBlock>
        <FormBlock title="Пацієнт" border>
          <FormRow>
            <FormColumn>
              <Field placeholder="Місто народження" type="text" name="birth_place" component={Input} disabled={disabled} />
            </FormColumn>
            <FormColumn>
              <RadioInputGroup
                name="gender"
                label="Стать"
                items={[
                  {
                    value: 'FEMALE',
                    label: 'Жінка',
                  },
                  {
                    value: 'MALE',
                    label: 'Чоловік',
                  },
                ]}
                disabled={disabled}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Паспорт" disabled={true} type="text" value="PASSPORT" name="documents.type" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Серія та номер" type="text" name="documents.PASSPORT.number" component={Input} disabled={disabled} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Виданий" type="text" name="documents.PASSPORT.issued_by" component={Input} disabled={disabled} />
            </FormColumn>
            <FormColumn>
              <Field theme="space-between" label="Дата видачі" placeholder="ДД/ММ/РР" name="documents.PASSPORT.issue_date" component={Datepicker} disabled={disabled} />
            </FormColumn>
          </FormRow>
        </FormBlock>

        {/* <div className={styles.form__plus}>
          <a>
            <img src={add} alt="" />
            <span>Додати документ</span>
          </a>
        </div> */}
        <FormBlock title="Адреса реєстрації Пацієнта">
          <FormSection name="addresses.REGISTRATION">
            <Addresses disabled={disabled} />
          </FormSection>
        </FormBlock>
        <FormBlock border>
          <FormBlockTitle right={<Field name="checked" label="Співпадає з місцем реєстрації" component={Checkbox} disabled={disabled} />}>
            Адреса надання медичних послуг
          </FormBlockTitle>
          <FormSection name="addresses.RESIDENCE">
            <Addresses disabled={disabled || values.checked} />
          </FormSection>
        </FormBlock>
        <FormBlock>
          <FormRow>
            <FormColumn>
              <Field
                name="refuse"
                label="Відмовляюсь від надання допомоги за місцем проживання (перебування)"
                component={Checkbox}
                disabled={disabled}
              />
            </FormColumn>
          </FormRow>
        </FormBlock>
        <FormBlock title="Контакти особи на випадок екстреної ситуації">
          <FormRow>
            <FormColumn>
              <Field placeholder="Прізвище" type="text" name="urgent_contact.last_name" component={Input} disabled={disabled} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Ім’я" type="text" name="urgent_contact.first_name" component={Input} disabled={disabled} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="По-батькові" type="text" name="urgent_contact.second_name" component={Input} disabled={disabled} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Номер мобільного" mask="+38 (111) 111-11-11" name="urgent_contact.phone_number" component={MaskedInput} disabled={disabled} />
            </FormColumn>
          </FormRow>
        </FormBlock>
        <FormBlock>
          <FormRow>
            <FormColumn>
              <Field placeholder="Номер мобільного" mask="+38 (111) 111-11-11" name="phones.MOBILE.number" component={MaskedInput} disabled={disabled} />
            </FormColumn>
            <FormColumn />
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Адреса електронної пошти" name="email" component={Input} disabled={disabled} />
            </FormColumn>
            <FormColumn />
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Слово-пароль" name="secret_word" component={Input} disabled={disabled} />
            </FormColumn>
            <FormColumn />
          </FormRow>
        </FormBlock>
      </Form>
    );
  }
}
