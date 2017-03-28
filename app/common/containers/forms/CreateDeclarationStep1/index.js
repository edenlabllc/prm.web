import React from 'react';
import { reduxForm, Field } from 'redux-form';
import withStyles from 'withStyles';
import validate from 'modules/validate';


import Input, { MaskedInput } from 'components/Input';
import Datepicker from 'components/Datepicker';
import Button from 'components/Button';

import styles from './styles.scss';

@reduxForm({
  form: 'personRegistrationStep1',
  validate: validate({
    first_name: {
      required: true,
    },
    last_name: {
      required: true,
    },
    birth_date: {
      required: true,
    },
  }),
})
@withStyles(styles)
export default class CreateDeclarationStep1 extends React.Component {
  render() {
    const {
      handleSubmit,
    } = this.props;

    return (
      <form onSubmit={handleSubmit} className={styles.form} >
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Прізвище" type="text" name="last_name" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field placeholder="Ім’я" type="text" name="first_name" component={Input} />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="По-батькові" type="text" name="second_name" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field
              theme="space-between"
              label="Дата народження"
              placeholder="ДД/ММ/РР"
              dateFormat="DD/MM/YY"
              name="birth_date"
              showMonthDropdown
              showYearDropdown
              component={Datepicker}
            />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="ІПН" type="number" name="national_id" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Номер мобільного" mask="+38 (111) 111-11-11" name="phones.number" component={MaskedInput} />
          </div>
        </div>
        <div className={styles.form__btns}>
          <Button disabled={true}>Зберегти зміни</Button>
          <Button theme="blue" type="submit">
            Далі
          </Button>
        </div>
      </form>
    );
  }
}
