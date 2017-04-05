import React from 'react';

import { PageTitle } from 'components/Title';
import { FormButtons } from 'components/Form';
import Button, { ButtonsGroup } from 'components/Button';

import ClinicCreate2Form from 'containers/forms/ClinicCreate2';

export default class ClinicCreateStep2Page extends React.Component {
  render() {
    return (
      <section>
        <PageTitle>Створити Профіль медичного закладу. Крок 2</PageTitle>
        <ClinicCreate2Form onSubmit={() => {}} />
        <FormButtons>
          <ButtonsGroup>
            <Button to="/clinics/create">Назад</Button>
            <Button type="button">Зберегти зміни</Button>
            <Button to="/clinics/create/3" theme="blue">Далі</Button>
          </ButtonsGroup>
        </FormButtons>
      </section>
    );
  }
}
