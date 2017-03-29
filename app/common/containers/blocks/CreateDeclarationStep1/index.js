import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'withStyles';
import { show } from 'components/Popup';

import { H1 } from 'components/Title';
import CreateDeclarationForm from 'containers/forms/CreateDeclarationStep1';

import SearchDeclarationPopup from 'containers/popups/SearchDeclaration';
import EmptySearchPopup from 'containers/popups/EmptySearchPopup';
import SpecifySearchPopup from 'containers/popups/SpecifySearchPopup';
import DeclarationExistPopup from 'containers/popups/DeclarationExist';

import { getDeclaration } from 'reducers';

import * as actions from './redux';
import styles from './styles.scss';

@connect((state) => {
  const block = state.blocks.CreateDeclarationStep1;
  return {
    ...block,
    declaration: block.declaration && getDeclaration(state, block.declaration),
  };
}, {
  show,
  ...actions,
})
@withStyles(styles)
export default class CreateDeclarationStep1 extends React.Component {
  render() {
    const {
      onSubmit, onSelectDeclaration,
      createNewDeclaration, updateExistingDeclaration,
      currentPersonsList, currentPerson, declaration,
    } = this.props;

    return (
      <section className={styles.declaration}>
        <div className={styles.declaration__title}>
          <H1>Створити нову декларцію. Крок 1</H1>
        </div>
        <div className={styles.declaration__form}>
          <CreateDeclarationForm
            onSubmit={onSubmit}
            title="1. Реєстрація декларації"
          />
        </div>
        <div>
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
        </div>
      </section>
    );
  }
}
