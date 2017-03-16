import React from 'react';
import classnames from 'classnames';
import withStyles from 'withStyles';

import Icon from 'components/Icon';
import Button from 'components/Button';

import styles from './styles.scss';

const THEME = ['default', 'wide'];
const PopupComponent = ({
  children,
  active = false,
  onClose,
  bgCloser = true,
  buttons = [],
  id,
  theme = THEME[0],
}) => (
  <section id={id} className={classnames(styles.popup, active && styles.active, styles[`theme-${theme}`])}>
    <div className={styles.in}>
      <button className={styles.popup__close} onClick={onClose}><Icon name="close" /></button>
      <header className={styles.popup__header}>
        <p>Commercial Medical</p>
        <p>Information System</p>
      </header>
      <article className={styles.popup__content}>
        {children}
      </article>
      <footer className={styles.popup__footer}>{
        buttons.map((i, idx) =>
          <div className={styles.popup__footer__button} key={i.key || idx}>
            <Button
              {...i}
              theme={i.theme}
            />
          </div>
        )
      }</footer>
    </div>
    { bgCloser && <div className={styles.closer} onClick={onClose} /> }
  </section>
);

PopupComponent.propTypes = {
  active: React.PropTypes.bool,
  id: React.PropTypes.string,
};

PopupComponent.defaultProps = {
  active: false,
  bgCloser: true,
};


export default withStyles(styles)(PopupComponent);
export popup, { reducer, show, hide, getPopup, hideAll } from './PopupContainer';
