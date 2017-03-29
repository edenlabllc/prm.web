import React from 'react';
import { reduxForm, Field } from 'redux-form';
import validate from 'modules/validate';

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
            placeholder="Код з смс"
            component={Input}
          />
        </div>
      </form>
    );
  }
}
