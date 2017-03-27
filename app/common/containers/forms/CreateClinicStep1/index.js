import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'withStyles';
import { Field, FormSection, reduxForm, getFormValues } from 'redux-form';
import Input, { SelectInput } from 'components/Input';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import { H3 } from 'components/Title';
import Addresses from 'containers/forms/Addresses';

import add from 'public/images/add.svg';
import styles from './styles.scss';

const forms = [
  'бюджетні установи',
  'державні  підприємства',
  'комунальні  підприємства',
  'господарські товариства',
  'приватні підприємства та об\'єднання підприємств',
  'іноземні підприємства',
  'виробничий коорератив',
];

@reduxForm({
  form: 'clinicRegistrationStep1',
})
@connect(state => ({
  values: getFormValues('clinicRegistrationStep1')(state),
}))
@withStyles(styles)
export default class CreateClinicStep1 extends React.Component {
  render() {
    // const { values } = this.props;

    return (
      <form className={styles.form}>
        <div className={styles.form__title}>
          <H3>Лікар</H3>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="ЄДРПОУ" type="text" name="birth_place" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field
              theme="medium"
              component={SelectInput}
              name="doctor"
              placeholder="Організаційно-правова форма"
              options={forms.map(item => ({
                title: item || '', name: item,
              }))}
            />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="Повна назва" type="text" name="full_name" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field placeholder="Cкорочена назва (за наявності)" type="text" name="short_name" component={Input} />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field theme="medium" placeholder="Публічна назва (якщо відрізняється)" type="text" name="public_name" component={Input} />
          </div>
        </div>
        <div className={styles.form__title}>
          <H3>Види діяності</H3>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="КВЕД" type="text" name="public_name" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field placeholder="КВЕД" type="text" name="public_name" component={Input} />
          </div>
        </div>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <Field placeholder="КВЕД" type="text" name="public_name" component={Input} />
          </div>
          <div className={styles.form__row__item}>
            <Field placeholder="КВЕД" type="text" name="public_name" component={Input} />
          </div>
        </div>
        <div className={styles.form__plus}>
          <a>
            <img src={add} alt="" />
            <span>Додати вид діяності</span>
          </a>
        </div>
        <div className={styles.form__title}>
          <H3>Місце знахоження</H3>
        </div>
        <FormSection name="addresses.REGISTRATION">
          <Addresses />
        </FormSection>
        <div className={styles.form__row}>
          <div className={styles.form__row__item}>
            <H3>Місце реєстрації</H3>
          </div>
          <div className={styles.form__row__item}>
            <div className={styles.align__right}>
              <span className={styles.form__row__text}>Співпадає з місцезнаходженням</span>
              <Field name="checked" label="Співпадає з місцем реєстрації" component={Checkbox} />
            </div>
          </div>
        </div>
        <FormSection name="addresses.RESIDENCE">
          <Addresses disabled={true} />
        </FormSection>
        <div className={styles.form__btns}>
          <Button type="submit">Зберегти зміни</Button>
          <Button to="/clinicStep2" theme="blue">Далі</Button>
        </div>
      </form>
    );
  }
}

