import React from 'react';
import { connect } from 'react-redux';
import { submit, isInvalid, isSubmitting } from 'redux-form';
import withStyles from 'withStyles';

import SelectPersonForm from 'containers/forms/SelectPersonForm';
import Popup, { popup } from 'components/Popup';
import { H3 } from 'components/Title';

import styles from './styles.scss';

@withStyles(styles)
@popup({
  name: 'searchDeclarationPopup',
})
@connect(state => ({
  invalid: isInvalid('selectPerson')(state),
  submitting: isSubmitting('selectPerson')(state),
}), { submit })
export default class SearchDeclaration extends React.Component {

  render() {
    const {
      popup,
      handleClose,
      submit,
      invalid,
      submitting,
      persons,
      onSelect,
    } = this.props;

    return (
      <Popup
        {...popup}
        onClose={handleClose}
        buttons={[
          { children: 'Знайти декларацію', disabled: invalid || submitting, theme: 'blue', onClick: () => submit('selectPerson') },
          { children: 'Назад', theme: 'light', onClick: () => handleClose() },
        ]}
      >
        <div className={styles.container}>
          <div className={styles.title}>
            <H3>Уточнення пошуку</H3>
          </div>
          <div>Для перевірки стану декларації оберіть пацієнта зі списку</div>
          <SelectPersonForm
            persons={persons}
            onSubmit={values => onSelect(persons[values.selectedPerson])}
          />
        </div>
      </Popup>
    );
  }
}
