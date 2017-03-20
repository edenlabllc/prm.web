import React from 'react';
import { connect } from 'react-redux';

import withStyles from 'withStyles';

// import { show } from 'components/Popup';
import { H1, H3 } from 'components/Title';
import CreateDeclarationForm from 'containers/forms/CreateDeclarationStep1';
import SearchDeclarationPopup from 'containers/popups/SearchDeclaration';

import { onSubmit } from './redux';

import styles from './styles.scss';

@connect(null, { onSubmit })
@withStyles(styles)
export default class CreateDeclarationStep1 extends React.Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <section className={styles.declaration}>
        <div className={styles.declaration__title}>
          <H1>Створити нову декларцію. Крок 1</H1>
        </div>
        <div className={styles.declaration__form}>
          <div className={styles.declaration__form__title}>
            <H3>1. Реєстрація декларації</H3>
          </div>
          <CreateDeclarationForm onSubmit={() => onSubmit()} />
        </div>
        <SearchDeclarationPopup />
      </section>
    );
  }
}
