import React from 'react';
import { reduxForm, Field } from 'redux-form';
import validate from 'modules/validate';

import Form, { FormButtons, FormRow, FormColumn, FormBlock } from 'components/Form';
import Input, { MaskedInput } from 'components/Input';
import Datepicker from 'components/Datepicker';
import Button, { ButtonsGroup } from 'components/Button';

@reduxForm({
  form: 'personRegistrationStep1',
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
export default class CreateDeclarationStep1 extends React.Component {
  render() {
    const {
      handleSubmit,
      title,
    } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <FormBlock title={title}>
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
                name="birth_date"
                showMonthDropdown
                showYearDropdown
                component={Datepicker}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="ІПН" type="number" name="national_id" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Номер мобільного" mask="+38 (111) 111-11-11" name="phones.MOBILE.number" component={MaskedInput} />
            </FormColumn>
          </FormRow>
        </FormBlock>
        <FormButtons>
          <ButtonsGroup>
            <Button disabled={true}>Зберегти зміни</Button>
            <Button theme="blue" type="submit">
              Далі
            </Button>
          </ButtonsGroup>
        </FormButtons>
      </Form>
    );
  }
}
