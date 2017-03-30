import React from 'react';

import { PageTitle } from 'components/Title';
import { FormButtons } from 'components/Form';
import Button, { ButtonsGroup } from 'components/Button';

import DoctorCreate1Form from 'containers/forms/DoctorCreate1';

export default class DoctorCreateStep1 extends React.Component {
  render() {
    return (
      <section>
        <PageTitle>Створити профіль лікаря. Крок 1</PageTitle>
        <DoctorCreate1Form
          onSubmit={() => {}}
          disabled
        />
        <FormButtons>
          <ButtonsGroup>
            <Button to="/doctors">Назад</Button>
            <Button to="/doctors/create/2" theme="blue">Далі</Button>
          </ButtonsGroup>
        </FormButtons>
      </section>
    );
  }
}
