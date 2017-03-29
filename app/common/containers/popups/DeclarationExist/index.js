import React from 'react';
import withStyles from 'withStyles';

import { format } from 'helpers/date';
import { H3 } from 'components/Title';
import Popup, { popup } from 'components/Popup';

import styles from './styles.scss';

@withStyles(styles)
@popup({
  name: 'declarationExistPopup',
})
export default class DeclarationExistPopup extends React.Component {
  render() {
    const { popup, handleClose, declaration, onCreateDeclaration } = this.props;

    return (
      <Popup
        {...popup}
        onClose={handleClose}
        buttons={[
          { children: 'Закрити', theme: 'light', onClick: () => handleClose() },
          { children: 'Нова Декларація', theme: 'blue', onClick: () => onCreateDeclaration() },
        ]}
      >
        <div className={styles.container}>
          <div className={styles.title}>
            <H3>Є діюча декларація</H3>
          </div>
          <div className={styles.declaration}>
            <div className={styles.bold}>
              {`Декларація #${declaration.id}`}
            </div>
            <div>
              {`Пацієнт: ${declaration.patient.first_name} ${declaration.patient.last_name}`}
            </div>
            <div>
              {`з ${format(declaration.start_date)} по ${format(declaration.end_date)}`}
            </div>
            <div>
              {`Лікар: ${(declaration.doctor.name)}`}
            </div>
            <div>
              {`Заклад: ${(declaration.msp.name)}`}
            </div>
          </div>
        </div>
      </Popup>
    );
  }
}
