import React from 'react';
import { provideHooks } from 'redial';
import { connect } from 'react-redux';

import { PageTitle } from 'components/Title';
import CreateDeclarationStep2 from 'containers/forms/CreateDeclarationStep2';

import { onCreate, redirectToFirstStepIfDataIsNotExist } from './redux';

@provideHooks({
  fetch: ({ dispatch }) => dispatch(redirectToFirstStepIfDataIsNotExist()),
})
@connect(null, {
  onCreate,
})
export default class UpdateDeclarationStep2 extends React.Component {

  state = {
    checked: false,
  };

  render() {
    const { onCreate } = this.props;
    return (
      <section>
        <PageTitle>Створити нову декларацію. Крок 2</PageTitle>
        <CreateDeclarationStep2
          onSubmit={onCreate}
          allowed={true}
        />
      </section>
    );
  }
}
