import React from 'react';
import { reduxForm, Field, FormSection, getFormValues } from 'redux-form';
import { connect } from 'react-redux';

import Input, { SelectInput } from 'components/Input';
import Checkbox from 'components/Checkbox';
import Addresses from 'containers/forms/Addresses';

import Form, { FormBlock, FormBlockTitle, FormRow, FormColumn } from 'components/Form';

const forms = [
  'бюджетні установи',
  'державні  підприємства',
  'комунальні  підприємства',
  'господарські товариства',
  'приватні підприємства та об\'єднання підприємств',
  'іноземні підприємства',
  'виробничий коорератив',
];

const TYPES = ['бюджетний', 'приватний'];

@reduxForm({
  form: 'clinicRegistrationStep1',
  initialValues: {
    checked: false,
  },
})
@connect(state => ({
  values: getFormValues('clinicRegistrationStep1')(state),
}))
export default class ClinicCreate1Form extends React.Component {
  render() {
    const { values } = this.props;

    return (
      <Form>
        <FormBlock>
          <FormRow>
            <FormColumn>
              <Field placeholder="ЄДРПОУ" type="text" name="edpoy" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field
                component={SelectInput}
                name="org_form"
                placeholder="Організаційно-правова форма"
                options={forms.map(item => ({
                  title: item || '', name: item,
                }))}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Повна назва" type="text" name="full_name" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Cкорочена назва (за наявності)" type="text" name="short_name" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Публічна назва (якщо відрізняється)" type="text" name="public_name" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field
                component={SelectInput}
                name="type"
                placeholder="Тип закладу"
                options={TYPES.map(item => ({
                  title: item || '', name: item,
                }))}
              />
            </FormColumn>
          </FormRow>
        </FormBlock>
        <FormBlock title="Види діяльності">
          <FormRow>
            <FormColumn>
              <Field placeholder="КВЕД" type="text" name="KVED" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="КВЕД" type="text" name="KVED2" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="КВЕД" type="text" name="KVED3" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="КВЕД" type="text" name="KVED4" component={Input} />
            </FormColumn>
          </FormRow>
        </FormBlock>
        <FormBlock title="Фактичне місцезнаходження">
          <FormSection name="addresses.REGISTRATION">
            <Addresses />
          </FormSection>
        </FormBlock>
        <FormBlock border>
          <FormBlockTitle right={<Field name="checked" label="Співпадає з місцезнаходженням" component={Checkbox} />}>
            Місце реєстрації
          </FormBlockTitle>
          <FormSection name="addresses.RESIDENCE">
            <Addresses disabled={values.checked} />
          </FormSection>
        </FormBlock>
      </Form>
    );
  }
}
