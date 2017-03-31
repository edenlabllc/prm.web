import React from 'react';
import { reduxForm, Field } from 'redux-form';

import Form, { FormBlock, FormRow, FormColumn } from 'components/Form';
import Datepicker from 'components/Datepicker';
import Input, { SelectInput } from 'components/Input';


const level = ['Молодший спеціаліст', 'Бакалавр', 'Спеціаліст', 'Магістр'];

const AcademicDegree = ['Старший дослідник', 'Доцент', ' Професор'];
const ScienceDegree = ['Доктор філософії', 'Доктор наук'];
const type = [
  'Інтернатура',
  'Спеціалізація',
  'Передатестаційний цикл',
  'Тематичне вдосконалення',
  'Курси інформації',
  'Стажування'];

const ProfessionalLevel = ['Друга категорія', 'Перша категорія', 'Вища категорія'];

const qualification_type = ['Присвоєння', 'Підтвердження'];

@reduxForm({
  form: 'doctorCreate2',
})
export default class DoctorCreate2Form extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <FormBlock title="Інформація про освіту">
          <FormRow>
            <FormColumn>
              <Field placeholder="Країна" type="text" name="EDUCATION.country" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Населений пункт" type="text" name="EDUCATION.city" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field
                placeholder="Офіційна повна назва навчального закладу"
                type="text"
                name="EDUCATION.university"
                component={Input}
              />
            </FormColumn>
            <FormColumn>
              <Field
                label="Рік завершення"
                placeholder="ДД/ММ/РР"
                name="EDUCATION.finished_date"
                component={Datepicker}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Номер диплому" type="text" name="EDUCATION.diploma_number" component={Input} />
            </FormColumn>
            <FormColumn />
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field
                component={SelectInput}
                name="EDUCATION.degree"
                placeholder="Рівень освіти"
                options={level.map(item => ({
                  title: item || '', name: item,
                }))}
              />
            </FormColumn>
            <FormColumn>
              <Field placeholder="спеціальність за дипломом" type="text" name="EDUCATION.speciality" component={Input} />
            </FormColumn>
          </FormRow>
        </FormBlock>

        <FormBlock title="Академічна ступінь">
          <FormRow>
            <FormColumn>
              <Field placeholder="Країна" type="text" name="ACADEMIC.country" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Населений пункт" type="text" name="ACADEMIC.city" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field
                component={SelectInput}
                name="ACADEMIC.degree"
                placeholder="Академічний ступінь"
                options={AcademicDegree.map(item => ({
                  title: item || '', name: item,
                }))}
              />
            </FormColumn>
            <FormColumn>
              <Field
                placeholder="Офіційна повна назва навчального закладу"
                type="text"
                name="ACADEMIC.university"
                component={Input}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Номер диплому" type="text" name="ACADEMIC.diploma_number" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Спеціальність" type="text" name="ACADEMIC.speciality" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field
                label="Рік завершення"
                placeholder="ДД/ММ/РР"
                name="ACADEMIC.issued_date"
                component={Datepicker}
              />
            </FormColumn>
            <FormColumn />
          </FormRow>
        </FormBlock>

        <FormBlock title="Науковий ступінь">
          <FormRow>
            <FormColumn>
              <Field placeholder="Країна" type="text" name="SCIENCE.country" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Населений пункт" type="text" name="SCIENCE.city" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field
                component={SelectInput}
                name="SCIENCE.degree"
                placeholder="Науковий ступінь"
                options={ScienceDegree.map(item => ({
                  title: item || '', name: item,
                }))}
              />
            </FormColumn>
            <FormColumn>
              <Field
                placeholder="Офіційна повна назва навчального закладу"
                type="text"
                name="SCIENCE.institution_name"
                component={Input}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Номер диплому" type="text" name="SCIENCE.diploma_number" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Спеціальність" type="text" name="SCIENCE.speciality2" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Тема диплому" type="text" name="SCIENCE.diploma_topic" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field
                label="Рік написання"
                placeholder="ДД/ММ/РР"
                name="SCIENCE.issued_date"
                component={Datepicker}
              />
            </FormColumn>
          </FormRow>
        </FormBlock>

        <FormBlock title="Досвід роботи">
          <FormRow>
            <FormColumn>
              <Field placeholder="Країна" type="text" name="WORK.country" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Населений пункт" type="text" name="WORK.city" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Місце роботи" type="text" name="WORK.work_place" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field placeholder="Посада" type="text" name="WORK.work_position" component={Input} />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field
                label="Дата початку роботи"
                placeholder="ДД/ММ/РР"
                name="WORK.start_date"
                component={Datepicker}
              />
            </FormColumn>
            <FormColumn>
              <Field
                label="Дата звільнення"
                placeholder="ДД/ММ/РР"
                name="WORK.finish_date"
                component={Datepicker}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field
                placeholder="Кількість років роботи"
                type="text"
                name="WORK.work_experience"
                component={Input}
              />
            </FormColumn>
            <FormColumn />
          </FormRow>
        </FormBlock>

        <FormBlock title="Кваліфікація">
          <FormRow>
            <FormColumn>
              <Field
                component={SelectInput}
                name="QUALIFICATION.qualification"
                placeholder="Кваліфікація"
                options={type.map(item => ({
                  title: item || '', name: item,
                }))}
              />
            </FormColumn>
            <FormColumn>
              <Field
                placeholder="Місце стажування"
                type="text"
                name="QUALIFICATION.institution_name"
                component={Input}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field
                placeholder="Спеціальність"
                type="text"
                name="QUALIFICATION.speciality"
                component={Input}
              />
            </FormColumn>
            <FormColumn>
              <Field
                label="Рік закінчення"
                placeholder="ДД/ММ/РР"
                name="QUALIFICATION.issued_date"
                component={Datepicker}
              />
            </FormColumn>
          </FormRow>
        </FormBlock>

        <FormBlock title="Професійний рівень">
          <FormRow>
            <FormColumn>
              <Field
                component={SelectInput}
                name="PROFESSIONAL.degree"
                placeholder="Професійний рівень"
                options={ProfessionalLevel.map(item => ({
                  title: item || '', name: item,
                }))}
              />
            </FormColumn>
            <FormColumn>
              <Field
                component={SelectInput}
                name="PROFESSIONAL.qualification"
                placeholder="Тип професійного рівня"
                options={qualification_type.map(item => ({
                  title: item || '', name: item,
                }))}
              />
            </FormColumn>
          </FormRow>
          <FormRow>
            <FormColumn>
              <Field placeholder="Місце стажування" type="text" name="PROFESSIONAL.institution_name" component={Input} />
            </FormColumn>
            <FormColumn>
              <Field
                label="Рік закінчення"
                placeholder="ДД/ММ/РР"
                name="PROFESSIONAL.issued_date"
                component={Datepicker}
              />
            </FormColumn>
          </FormRow>
        </FormBlock>
      </Form>
    );
  }
}
