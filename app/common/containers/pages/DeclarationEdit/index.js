import React from 'react';
import { connect } from 'react-redux';

import { PageTitle } from 'components/Title';
import DeclarationCreateForm from 'containers/forms/DeclarationCreate';

import { onCreate } from './redux';

@connect(null, {
  onCreate,
})
export default class DeclarationEditPage extends React.Component {

  state = {
    checked: false,
  };

  render() {
    const { onCreate } = this.props;
    return (
      <section>
        <PageTitle>Створити нову декларацію. Крок 2</PageTitle>
        <DeclarationCreateForm
          onSubmit={onCreate}
          allowed={true}
        />
      </section>
    );
  }
}
