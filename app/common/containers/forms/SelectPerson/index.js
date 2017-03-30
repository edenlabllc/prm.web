import React from 'react';
import { reduxForm, Field } from 'redux-form';
import validate from 'modules/validate';
import withStyles from 'withStyles';

import { RadioButtonInput } from 'components/Input';

import styles from './styles.scss';

@withStyles(styles)
@reduxForm({
  form: 'selectPerson',
  validate: validate({
    selectedPerson: {
      required: true,
    },
  }),
})
export default class SelectPersonForm extends React.Component {
  render() {
    const { handleSubmit, persons } = this.props;
    return (
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        {
          Object.values(persons).map(item =>
            <div key={item.id} className={styles.form__item}>
              <div>
                <Field
                  theme="radiobtn"
                  type="radio"
                  value={item.id}
                  name="selectedPerson"
                  component={RadioButtonInput}
                />
              </div>
              <div>
                <span className={styles.bold}>
                  {item.first_name} {item.last_name}
                </span>
                <span>{`#${item.id}`}</span>
                {
                  item.birth_place !== null &&
                    <span className={styles.bold}>
                      Місто народження: {item.birth_place}
                    </span>
                }
              </div>
            </div>
          )
        }
      </form>
    );
  }
}
