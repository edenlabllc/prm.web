import React from 'react';

import { PageTitle } from 'components/Title';
import { FormButtons } from 'components/Form';
import Button, { ButtonsGroup } from 'components/Button';

import ClinicCreate3Form from 'containers/forms/ClinicCreate3';

export default class ClinicCreateStep3Page extends React.Component {
  render() {
    return (
      <section>
        <PageTitle>Створити профіль Клініки. Крок 3</PageTitle>
        <ClinicCreate3Form onSubmit={() => {}} />
        <FormButtons>
          <ButtonsGroup>
            <Button to="/clinics/create/2">Назад</Button>
            <Button type="button">Зберегти зміни</Button>
            <Button to="/declarations" theme="blue">Створити профіль</Button>
          </ButtonsGroup>
        </FormButtons>
      </section>
    );
  }
}
