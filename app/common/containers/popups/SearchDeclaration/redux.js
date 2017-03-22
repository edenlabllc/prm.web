import { searchDeclation } from 'redux/declarations';
import { show } from 'components/Popup';


export const onSubmit = () => (dispatch, getState) => {
  const selectedPerson = {
    person_id: getState().form.searchDeclarationList.values.selectedPerson || null,
  };

  console.log(selectedPerson);
  return dispatch(searchDeclation(selectedPerson)).then((resp) => {
    console.log(resp);
    return dispatch(show('emptySearchPopup'));
  });
};
