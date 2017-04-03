import React from 'react';
import { reduxForm, Field } from 'redux-form';

import Form, { FormBlock, FormRow, FormColumn } from 'components/Form';
import Datepicker from 'components/Datepicker';
import { RadioInputGroup } from 'components/RadioInput';
import Input, { MaskedInput, SelectInput } from 'components/Input';

const level = ['терапевт', 'педіатр', 'сімейний лікар'];

@reduxForm({
  form: 'doctorCreate1',
  initialValues: {
    gender: 'FEMALE',
  },
})
export default class DoctorCreate1Form extends React.Component {
  render() {
    const { handleSubmit } = this.props;

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
              <Field placeholder="ІПН" type="number" name="national_id" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="УНЗР" type="text" name="unzr" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Місце народження" type="text" name="birth_place" component={Input} />
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
        <FormBlock>
          <FormRow>
            <FormColumn>
              <Field placeholder="Номер мобільного" mask="+38 (111) 111-11-11" name="phones.mobile" component={MaskedInput} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Адреса електронної пошти" name="email" component={Input} />
            </FormColumn>
          </FormRow>
        </FormBlock>
        <FormRow>
          <FormColumn>
            <Field placeholder="Посада" type="text" name="birth_place" component={Input} />
          </FormColumn>
          <FormColumn>
            <Field theme="space-between" label="Дата вступу" placeholder="ДД/ММ/РР" name="documents.issue_date" component={Datepicker} />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <Field
              component={SelectInput}
              name="doctor"
              placeholder="Спеціальність"
              options={level.map(item => ({
                title: item || '', name: item,
              }))}
            />
          </FormColumn>
          <FormColumn />
        </FormRow>
      </Form>
    );
  }
}
