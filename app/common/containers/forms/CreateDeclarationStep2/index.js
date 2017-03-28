import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, FormSection, getFormValues } from 'redux-form';
import validate from 'modules/validate';

import Datepicker from 'components/Datepicker';
import { RadioInputGroup } from 'components/RadioInput';
import Input, { MaskedInput, SelectInput } from 'components/Input';
import Checkbox from 'components/Checkbox';
import Button, { ButtonsGroup } from 'components/Button';
import Addresses from 'containers/forms/Addresses';

import Form, { FormBlock, FormBlockTitle, FormRow, FormColumn, FormButtons } from 'components/Form';

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
export default class UpdateDeclarationStep2 extends React.Component {
  render() {
    const { handleSubmit, showPopup, values, allowed = false } = this.props;

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
              />
            </FormColumn>
          </FormRow>
        </FormBlock>
        <FormBlock title="Пацієнт" border>
          <FormRow>
            <FormColumn>
              <Field placeholder="Місто народження" type="text" name="birth_place" component={Input} />
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
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Паспорт" disabled={true} type="text" value="PASSPORT" name="documents.type" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Серія та номер" type="text" name="documents.number" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Виданий" type="text" name="documents.issued_by" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field theme="space-between" label="Дата видачі" placeholder="ДД/ММ/РР" name="documents.issue_date" component={Datepicker} />
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
            <Addresses />
          </FormSection>
        </FormBlock>
        <FormBlock border>
          <FormBlockTitle right={<Field name="checked" label="Співпадає з місцем реєстрації" component={Checkbox} />}>
            Адреса проживання Пацієнта
          </FormBlockTitle>
          <FormSection name="addresses.RESIDENCE">
            <Addresses disabled={values.checked} />
          </FormSection>
        </FormBlock>
        <FormBlock>
          <FormRow>
            <FormColumn>
              <Field theme="medium" placeholder="Номер мобільного" mask="+38 (111) 111-11-11" name="phones.mobile" component={MaskedInput} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field theme="medium" placeholder="Адреса електронної пошти" name="email" component={Input} />
            </FormColumn>
          </FormRow>
        </FormBlock>
        <FormButtons>
          <ButtonsGroup>
            <Button type="submit">Зберегти зміни</Button>
            <Button onClick={() => showPopup()} theme="blue">Далі</Button>
          </ButtonsGroup>
        </FormButtons>
      </Form>
    );
  }
}
