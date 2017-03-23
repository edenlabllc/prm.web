import { handleActions, createAction } from 'redux-actions';
import { combineReducers } from 'redux';

import { searchDeclation } from 'redux/declarations';
import { fetchDoctor } from 'redux/doctor';
import { fetchPerson } from 'redux/person';
import { fetchMSPS } from 'redux/msp';
import { show, hide } from 'components/Popup';

const setSelectedPerson = createAction('person/SET_SELECTER_PERSON');

export const onSubmit = () => (dispatch, getState) => {
  const state = getState();
  const selectedPatient = {
    patient_id: state.form.searchDeclarationList.values.selectedPerson || null,
  };
  return dispatch(searchDeclation(selectedPatient)).then((resp) => {
    const declarations = resp.payload.entities.declarations;

    Object.keys(declarations).map((i) => {
      if (declarations[i].patient_id === selectedPatient.patient_id) {
        const declaration = {
          id: declarations[i].id,
          start_date: declarations[i].start_date,
          end_date: declarations[i].end_date,
        };

        dispatch(fetchDoctor(declarations[i].doctor_id)).then((resp) => {
          const doctor = resp.payload.entities.doctors;
          const doctorName = doctor[Object.keys(doctor)[0]].name;

          dispatch(fetchPerson(declarations[i].patient_id)).then((resp) => {
            const person = resp.payload.entities.persons;
            const personObj = person[Object.keys(person)[0]];
            const personName = `${personObj.first_name} ${personObj.last_name}`;

            dispatch(fetchMSPS()).then((resp) => {
              const mspsObj = resp.payload.entities.msps;
              const mspName = mspsObj[Object.keys(mspsObj)[0]].name;

              const currentDeclaration = {
                ...declaration,
                doctorName,
                personName,
                mspName,
              };

              dispatch(setSelectedPerson(currentDeclaration));
              dispatch(hide('searchDeclarationPopup'));
              dispatch(hide('specifySearchPopup'));
              dispatch(show('declarationExistPopup'));
            });
          });
        });
      }
      return true;
    });
    return dispatch(show('emptySearchPopup'));
  });
};

const selectedPerson = handleActions({
  [setSelectedPerson]: (state, action) => action.payload,
}, []);

export default combineReducers({
  selectedPerson,
});
