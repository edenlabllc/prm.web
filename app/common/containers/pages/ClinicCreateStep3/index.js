import React from 'react';
import { connect } from 'react-redux';
import { PageTitle } from 'components/Title';
import { FormButtons } from 'components/Form';
import { show } from 'components/Popup';
import Button, { ButtonsGroup } from 'components/Button';
import ClinicSignInPopup from 'containers/popups/ClinicSignIn';
import ClinicCreate3Form from 'containers/forms/ClinicCreate3';

@connect(null, { show })
export default class ClinicCreateStep3Page extends React.Component {
  render() {
    const { show } = this.props;
    return (
      <section>
        <PageTitle>Створити профіль медичного закладу. Крок 3</PageTitle>
        <ClinicCreate3Form onSubmit={() => {}} />
        <FormButtons>
          <ButtonsGroup>
            <Button to="/clinics/create/2">Назад</Button>
            <Button type="button">Зберегти зміни</Button>
            <Button theme="blue" onClick={() => show('clinicSignIn')}>Створити профіль</Button>
          </ButtonsGroup>
        </FormButtons>
        <ClinicSignInPopup />
      </section>
    );
  }
}
