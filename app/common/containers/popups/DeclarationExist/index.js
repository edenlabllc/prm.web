import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'withStyles';


import { format } from 'helpers/date';
import { H3 } from 'components/Title';
import Popup, { popup } from 'components/Popup';

import { getDeclaration } from 'reducers';
import styles from './styles.scss';

@connect(state => ({
  existingDeclaration: getDeclaration(state, state.blocks.SelectedPerson.declaration),
}))
@withStyles(styles)
@popup({
  name: 'declarationExistPopup',
})
export default class DeclarationExistPopup extends React.Component {
  render() {
    const { popup, handleClose, existingDeclaration } = this.props;

    return (
      <Popup
        {...popup}
        onClose={handleClose}
        buttons={[
          { children: 'Закрити', theme: 'light', onClick: () => handleClose() },
          { children: 'Нова Декларація', theme: 'blue', to: '/declarationStep2' },
        ]}
      >
        <div className={styles.container}>
          <div className={styles.title}>
            <H3>Є діюча декларація</H3>
          </div>
          <div className={styles.declaration}>
            <div className={styles.bold}>
              {`Декларація #${existingDeclaration.id}`}
            </div>
            <div>
              {`Пацієнт: ${existingDeclaration.patient.first_name} ${existingDeclaration.patient.last_name}`}
            </div>
            <div>
              {`з ${format(existingDeclaration.start_date)} по ${format(existingDeclaration.end_date)}`}
            </div>
            <div>
              {`Лікар: ${(existingDeclaration.doctor.name)}`}
            </div>
            <div>
              {`Заклад: ${(existingDeclaration.msp.name)}`}
            </div>
          </div>
        </div>
      </Popup>
    );
  }
}
