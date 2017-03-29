import React from 'react';
import { reduxForm, Field } from 'redux-form';
import validate from 'modules/validate';

import Form, { FormButtons, FormRow, FormColumn, FormBlock } from 'components/Form';
import Input, { MaskedInput } from 'components/Input';
import Datepicker from 'components/Datepicker';
import Button, { ButtonsGroup } from 'components/Button';

@reduxForm({
  form: 'createDeclarationStep1',
  validate: validate({
    first_name: {
      required: true,
    },
    last_name: {
      required: true,
    },
    birth_date: {
      required: true,
    },
  }),
})
export default class CreateDeclarationStep1Form extends React.PureComponent {
  render() {
    const { handleSubmit, title, disabled } = this.props;
    return (
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <FormBlock title={title}>
          <FormRow>
            <FormColumn>
              <Field placeholder="Прізвище" type="text" name="last_name" component={Input} disabled={disabled} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Ім’я" type="text" name="first_name" component={Input} disabled={disabled} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="По-батькові" type="text" name="second_name" component={Input} disabled={disabled} />
            </FormColumn>
            <FormColumn>
              <Field
                theme="space-between"
                label="Дата народження"
                name="birth_date"
                showMonthDropdown
                showYearDropdown
                component={Datepicker}
                disabled={disabled}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="ІПН" type="number" name="national_id" component={Input} disabled={disabled} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Номер мобільного" mask="+38 (111) 111-11-11" name="phones.MOBILE.number" component={MaskedInput} disabled={disabled} />
            </FormColumn>
          </FormRow>
        </FormBlock>
        {
          !disabled && (
            <FormButtons>
              <ButtonsGroup>
                <Button to="/declarations">Назад</Button>
                <Button theme="blue" type="submit">
                  Знайти
                </Button>
              </ButtonsGroup>
            </FormButtons>
          )
        }
      </Form>
    );
  }
}
