import React from 'react';
import { reduxForm, Field } from 'redux-form';

import Form, { FormBlock, FormRow, FormColumn, FormButtons } from 'components/Form';
import Datepicker from 'components/Datepicker';
import Input, { SelectInput } from 'components/Input';
import Button, { ButtonsGroup } from 'components/Button';

// import add from 'public/images/add.svg';

const category = ['PD', 'вища', 'середня'];
const level = ['PD', 'вища', 'середня'];

@reduxForm({
  form: 'doctorRegistrationStep2',
})
export default class CreateDoctorStep2 extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <FormBlock title="Лікар">
          <FormRow>
            <FormColumn>
              <Field placeholder="Атестована спеціальність" type="text" name="birth_place" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field
                theme="medium"
                component={SelectInput}
                name="doctor"
                placeholder="Категорія"
                options={category.map(item => ({
                  title: item || '', name: item,
                }))}
              />
            </FormColumn>
          </FormRow>
        </FormBlock>
        <FormRow>
          <FormColumn>
            <Field theme="space-between" label="Дата атестації" placeholder="ДД/ММ/РР" name="documents.issue_date" component={Datepicker} />
          </FormColumn>
          <FormColumn>
            <Field placeholder="Номер сертифікату" type="text" name="birth_place" component={Input} />
          </FormColumn>
        </FormRow>
        {/* <div className={styles.form__plus}>
          <a>
          <img src={add} alt="" />
          <span>Додати атестацію</span>
          </a>
        *</div> */}
        <FormRow>
          <FormColumn>
            <Field theme="medium" placeholder="Назва навчального закладу" type="text" name="documents.issued_by" component={Input} />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <Field
              component={SelectInput}
              name="doctor"
              placeholder="Рівень освіти"
              options={level.map(item => ({
                title: item || '', name: item,
              }))}
            />
          </FormColumn>
          <FormColumn>
            <Field
              theme="medium"
              component={SelectInput}
              name="doctor"
              placeholder="Категорія"
              options={level.map(item => ({
                title: item || '', name: item,
              }))}
            />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <Field theme="space-between" label="Рік початку" placeholder="ДД/ММ/РР" name="documents.issue_date" component={Datepicker} />
          </FormColumn>
          <FormColumn>
            <Field theme="space-between" label="Рік випуску" placeholder="ДД/ММ/РР" name="documents.issue_date" component={Datepicker} />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <Field theme="medium" placeholder="Номер диплому" type="text" name="documents.issued_by" component={Input} />
          </FormColumn>
        </FormRow>
        {/* <div className={styles.form__plus}>
          <a>
          <img src={add} alt="" />
          <span>Додати освіту</span>
          </a>
        </div> */}
        <FormRow>
          <FormColumn>
            <Field placeholder="ЄДРПОУ" type="text" name="documents.issued_by" component={Input} />
          </FormColumn>
          <FormColumn>
            <Field placeholder="Назва закладу" type="text" name="documents.issued_by" component={Input} />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <Field placeholder="Посада" type="text" name="birth_place" component={Input} />
          </FormColumn>
          <FormColumn>
            <Field theme="space-between" label="Дата вступу" placeholder="ДД/ММ/РР" name="documents.issue_date" component={Datepicker} />
          </FormColumn>
        </FormRow>
        <FormRow>
          <FormColumn>
            <Field
              theme="medium"
              component={SelectInput}
              name="doctor"
              placeholder="Спеціальність"
              options={level.map(item => ({
                title: item || '', name: item,
              }))}
            />
          </FormColumn>
        </FormRow>
        {/* <div className={styles.form__plus}>
          <a>
          <img src={add} alt="" />
          <span>Додати місце роботи</span>
          </a>
        </div> */}
        <FormButtons>
          <ButtonsGroup>
            <Button to="/doctor">Назад</Button>
            <Button type="submit">Зберегти зміни</Button>
          </ButtonsGroup>
        </FormButtons>
      </Form>
    );
  }
}

