import React from 'react';

import { PageTitle } from 'components/Title';
import { FormButtons } from 'components/Form';
import Button, { ButtonsGroup } from 'components/Button';

import ClinicCreate1Form from 'containers/forms/ClinicCreate1';

export default class CreateDeclarationStep1 extends React.Component {
  render() {
    return (
      <section>
        <PageTitle>Створити Профіль медичного закладу. Крок 1</PageTitle>
        <ClinicCreate1Form onSubmit={() => {}} />
        <FormButtons>
          <ButtonsGroup>
            <Button type="button">Зберегти зміни</Button>
            <Button to="/clinics/create/2" theme="blue">Далі</Button>
          </ButtonsGroup>
        </FormButtons>
      </section>
    );
  }
}
