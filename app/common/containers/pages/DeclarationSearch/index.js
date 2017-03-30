import React from 'react';
import { connect } from 'react-redux';
import { show } from 'components/Popup';

import { submit } from 'redux-form';

import { PageTitle } from 'components/Title';
import { FormButtons } from 'components/Form';
import Button, { ButtonsGroup } from 'components/Button';

import DeclarationSearchForm from 'containers/forms/DeclarationSearch';

import SearchDeclarationPopup from 'containers/popups/SearchDeclaration';
import EmptySearchPopup from 'containers/popups/EmptySearchPopup';
import SpecifySearchPopup from 'containers/popups/SpecifySearchPopup';
import DeclarationExistPopup from 'containers/popups/DeclarationExist';

import { getDeclaration } from 'reducers';

import * as actions from './redux';

@connect((state) => {
  const block = state.pages.DeclarationSearch;
  return {
    ...block,
    declaration: block.declaration && getDeclaration(state, block.declaration),
  };
}, {
  show,
  submit,
  ...actions,
})
export default class DeclarationSearchPage extends React.Component {
  render() {
    const {
      submit,
      onSubmit, onSelectDeclaration,
      createNewDeclaration, updateExistingDeclaration,
      currentPersonsList, currentPerson, declaration,
    } = this.props;

    return (
      <section>
        <PageTitle>Створити нову декларцію. Крок 1</PageTitle>
        <DeclarationSearchForm onSubmit={onSubmit} title="1. Пошук декларації пацієнта" />
        <FormButtons>
          <ButtonsGroup>
            <Button to="/declarations">Назад</Button>
            <Button theme="blue" onClick={() => submit('declarationSearch')}>Знайти</Button>
          </ButtonsGroup>
        </FormButtons>
        <SearchDeclarationPopup persons={currentPersonsList} onSelect={onSelectDeclaration} />
        <EmptySearchPopup
          person={currentPerson}
          onCreateDeclaration={() => createNewDeclaration(currentPerson)}
        />
        <SpecifySearchPopup
          person={currentPerson}
          onCreateDeclaration={() => createNewDeclaration(currentPerson)}
        />
        <DeclarationExistPopup
          declaration={declaration}
          onCreateDeclaration={() => updateExistingDeclaration({
            person: currentPerson,
            declaration,
          })}
        />
      </section>
    );
  }
}
