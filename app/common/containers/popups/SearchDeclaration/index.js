import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { ErrorMessage } from 'modules/validate';
import { RadioButtonInput } from 'components/Input';
import withStyles from 'withStyles';

import Popup, { popup } from 'components/Popup';
import { H3 } from 'components/Title';

import { onSubmit } from './redux';

import styles from './styles.scss';

@connect(state => ({
  currentPersons: state.blocks.CreateDeclarationStep1.currentPersonsList,
}), { onSubmit })
@withStyles(styles)
@popup({
  name: 'searchDeclarationPopup',
})
@reduxForm({
  form: 'searchDeclarationList',
})
export default class SearchDeclaration extends React.Component {

  render() {
    const { popup, handleClose, currentPersons, onSubmit } = this.props;

    return (
      <Popup
        {...popup}
        onClose={handleClose}
        buttons={[
          { children: 'Знайти декларацію', theme: 'blue', onClick: () => onSubmit() },
          { children: 'Назад', theme: 'light', onClick: () => handleClose() },
        ]}
      >
        <div className={styles.container}>
          <div className={styles.title}>
            <H3>Уточнення пошуку</H3>
          </div>
          <div>Для перевірки стану декларації оберіть пацієнта зі списку</div>
          <form className={styles.form}>
            {
              Object.keys(currentPersons).map(item =>
                <div key={currentPersons[item].id} className={styles.form__item}>
                  <div>
                    <Field
                      theme="radiobtn"
                      type="radio"
                      value={currentPersons[item].id}
                      name="selectedPerson"
                      component={RadioButtonInput}
                    >
                      <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
                    </Field>
                  </div>
                  <div>
                    <span>{currentPersons[item].first_name}</span>
                    <span>{currentPersons[item].last_name}</span>
                    <span>{`#${currentPersons[item].id}`}</span>
                    {
                      currentPersons[item].birth_place !== null &&
                        <span className={styles.bold}>
                          Місто народження: {currentPersons[item].birth_place}
                        </span>
                    }
                  </div>
                </div>
              )
            }
          </form>
        </div>
      </Popup>
    );
  }
}
