import React from 'react';
import { reduxForm, Field, FormSection, getFormValues } from 'redux-form';
import { connect } from 'react-redux';

import Form, { FormBlock, FormBlockTitle, FormRow, FormColumn, FormButtons } from 'components/Form';
import Datepicker from 'components/Datepicker';
import { RadioInputGroup } from 'components/RadioInput';
import Input, { MaskedInput } from 'components/Input';
import Checkbox from 'components/Checkbox';
import Button, { ButtonsGroup } from 'components/Button';
import Addresses from 'containers/forms/Addresses';

@reduxForm({
  form: 'doctorRegistrationStep1',
  initialValues: {
    gender: 'FEMALE',
  },
})
@connect(state => ({
  values: getFormValues('doctorRegistrationStep1')(state),
}))
export default class CreateDoctorStep1 extends React.Component {
  render() {
    const { handleSubmit, values } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <FormBlock title="Персональні дані">
          <FormRow>
            <FormColumn>
              <Field placeholder="Прізвище" type="text" name="last_name" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Ім’я" type="text" name="first_name" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="По-батькові" type="text" name="second_name" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field
                theme="space-between"
                label="Дата народження"
                placeholder="ДД/ММ/РР"
                name="birth_date"
                component={Datepicker}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field theme="medium" placeholder="ІПН" type="number" name="national_id" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Місто народження" type="text" name="birth_place" component={Input} />
            </FormColumn>
          </FormRow>
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
        <FormBlock title="Адреса реєстрації Лікаря">
          <FormSection name="addresses.REGISTRATION">
            <Addresses />
          </FormSection>
        </FormBlock>
        <FormBlock border>
          <FormBlockTitle right={<Field name="checked" label="Співпадає з місцем реєстрації" component={Checkbox} />}>
            Співпадає з місцем реєстрації
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
            <Button to="/doctorsStep2" theme="blue">Далі</Button>
          </ButtonsGroup>
        </FormButtons>
      </Form>
    );
  }
}

