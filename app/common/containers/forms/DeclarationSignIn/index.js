import React from 'react';
import { reduxForm, Field } from 'redux-form';
import validate from 'modules/validate';

import withStyles from 'withStyles';

import Input from 'components/Input';
import Checkbox from 'components/Checkbox';

import styles from './styles.scss';

@reduxForm({
  form: 'declarationSignIn',
  validate: validate({
    password: {
      required: true,
    },
    passwordSecond: {
      required: true,
    },
  }),
})
@withStyles(styles)
export default class DeclarationSignInForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__row}>
          {
            // <Field
            //   accept=".csv"
            //   name="file"
            //   placeholder="Файл з сертифікатом відкритого ключа"
            //   component={SelectFileInput}
            // />
          }
        </div>
        <div className={styles.form__row}>
          <Field
            type="password"
            name="passwordSecond"
            placeholder="Пароль до закритого ключа"
            component={Input}
          />
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__flex}>
            <Field
              name="signed"
              component={Checkbox}
            />
            <span>Пацієнт підписав декларацію</span>
          </div>
        </div>
      </form>
    );
  }
}
