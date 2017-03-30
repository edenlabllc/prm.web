import { show } from 'components/Popup';
import { signInDeclaration } from 'redux/declarations';

export const onSubmit = declarationId => dispatch =>
  dispatch(signInDeclaration(declarationId)).then((action) => {
    if (action.error) throw dispatch(show('declarationSignInFailure'));
    return dispatch(show('declarationSignInSuccess'));
  });

