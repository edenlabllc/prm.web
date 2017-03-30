import React from 'react';
import { reduxForm, Field, FormSection } from 'redux-form';

import Input, { MaskedInput, SelectInput } from 'components/Input';
import Datepicker from 'components/Datepicker';
import Addresses from 'containers/forms/Addresses';

import Form, { FormBlock, FormRow, FormColumn } from 'components/Form';

const category = [
  'вища категорія',
  '1 категорія',
  '2 категорія',
];

@reduxForm({
  form: 'clinicRegistrationStep3',
})
export default class ClinicCreate3Form extends React.Component {
  render() {
    return (
      <Form>
        <FormBlock title="Дані про відокремлені підрозділи">
          <FormSection name="addresses.RESIDENCE">
            <Addresses />
          </FormSection>
        </FormBlock>
        <FormBlock>
          <FormRow>
            <FormColumn>
              <Field placeholder="Назва" type="text" name="name" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Номер ВП" type="text" name="number" component={Input} />
            </FormColumn>
          </FormRow>
        </FormBlock>
        <FormBlock title="Державна акредитація">
          <FormRow>
            <FormColumn>
              <Field
                theme="medium"
                component={SelectInput}
                name="category"
                placeholder="Категорія"
                options={category.map(item => ({
                  title: item, name: item,
                }))}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field theme="space-between" label="Дата" placeholder="ДД/ММ/РР" name="documents.date" component={Datepicker} />
            </FormColumn>
            <FormColumn>
              <Field theme="space-between" label="Термін дії до" placeholder="ДД/ММ/РР" name="documents.issue_date" component={Datepicker} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Номер наказу МОЗ" type="text" name="number" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field theme="space-between" label="Дата наказу" placeholder="ДД/ММ/РР" name="documents.issue_by" component={Datepicker} />
            </FormColumn>
          </FormRow>
        </FormBlock>

        <FormBlock title="Ліцензія">
          <FormRow>
            <FormColumn>
              <Field placeholder="Серія" type="text" name="serial" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Номер ліцензії" type="text" name="serialNumber" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field theme="space-between" label="Дата видачі" placeholder="ДД/ММ/РР" name="documents.issue_in" component={Datepicker} />
            </FormColumn>
            <FormColumn>
              <Field theme="space-between" label="Орган" placeholder="ДД/ММ/РР" name="organ" component={Datepicker} />
            </FormColumn>
          </FormRow>
        </FormBlock>
        <FormBlock title="Контакти закладу">
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
      </Form>
    );
  }
}
