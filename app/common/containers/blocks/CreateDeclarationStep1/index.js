import React from 'react';
import { connect } from 'react-redux';
import { isInvalid, isSubmitting } from 'redux-form';
import withStyles from 'withStyles';
import { show } from 'components/Popup';

import { H1 } from 'components/Title';
import CreateDeclarationForm from 'containers/forms/CreateDeclarationStep1';

import SearchDeclarationPopup from 'containers/popups/SearchDeclaration';
import EmptySearchPopup from 'containers/popups/EmptySearchPopup';
import SpecifySearchPopup from 'containers/popups/SpecifySearchPopup';
import DeclarationExistPopup from 'containers/popups/DeclarationExist';

import { onSubmit } from './redux';

import styles from './styles.scss';

@connect(state => ({
  invalid: isInvalid('createDeclarationForm')(state),
  submitting: isSubmitting('createDeclarationForm')(state),
}), { onSubmit, show })
@withStyles(styles)
export default class CreateDeclarationStep1 extends React.Component {
  render() {
    const {
      onSubmit,
      invalid,
      submitting,
    } = this.props;

    return (
      <section className={styles.declaration}>
        <div className={styles.declaration__title}>
          <H1>Створити нову декларцію. Крок 1</H1>
        </div>
        <div className={styles.declaration__form}>
          <CreateDeclarationForm
            onSubmit={onSubmit}
            valid={invalid}
            submitting={submitting}
            title="1. Реєстрація декларації"
          />
        </div>
        <div>
          <SearchDeclarationPopup />
          <EmptySearchPopup />
          <SpecifySearchPopup />
          <DeclarationExistPopup />
        </div>
      </section>
    );
  }
}
