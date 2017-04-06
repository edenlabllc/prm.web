import React from 'react';
import { reduxForm, Field } from 'redux-form';
import validate from 'modules/validate';
import { IS_SMS_ENABLED } from 'config';

import withStyles from 'withStyles';

import Input from 'components/Input';

import styles from './styles.scss';

@reduxForm({
  form: 'lookupConfirm',
  validate: validate({
    code: {
      required: true,
    },
  }),
})
@withStyles(styles)
export default class LookupConfirm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__row}>
          <Field
            type="text"
            name="code"
            placeholder={IS_SMS_ENABLED ? 'Код з смс' : 'Введіть 123456'}
            component={Input}
          />
        </div>
      </form>
    );
  }
}
