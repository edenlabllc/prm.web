import React from 'react';

import { PageTitle } from 'components/Title';
import { FormButtons } from 'components/Form';
import Button, { ButtonsGroup } from 'components/Button';

import DoctorCreate2Form from 'containers/forms/DoctorCreate2';

export default class DoctorCreateStep2Page extends React.Component {
  render() {
    return (
      <section>
        <PageTitle>Створити профіль Лікаря. Крок 2</PageTitle>
        <DoctorCreate2Form onSubmit={() => {}} />
        <FormButtons>
          <ButtonsGroup>
            <Button to="/doctors/create">Назад</Button>
            <Button to="/doctors" theme="blue">Створити профіль</Button>
          </ButtonsGroup>
        </FormButtons>
      </section>
    );
  }
}
