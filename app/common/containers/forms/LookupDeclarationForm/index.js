import React from 'react';
import { reduxForm, Field } from 'redux-form';
import validate, { ErrorMessage } from 'modules/validate';

import withStyles from 'withStyles';

import Input from 'components/Input';

import styles from './styles.scss';

@reduxForm({
  form: 'lookupDeclarationForm',
  validate: validate({
    passwordSecond: {
      required: true,
    },
  }),
})
@withStyles(styles)
export default class LookupDeclarationForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__row}>
          <Field
            type="text"
            name="passwordSecond"
            placeholder="Код з смс"
            component={Input}
          >
            <ErrorMessage when="required">Обов'язкове поле</ErrorMessage>
          </Field>
        </div>
      </form>
    );
  }
}
