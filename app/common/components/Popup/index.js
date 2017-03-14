import React from 'react';
import classnames from 'classnames';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';

// import Button from '../Button';
import Icon from 'components/Icon';
import Button from 'components/Button';

import styles from './styles.scss';

// const DEFAULT_CONFIRM_BTN_TEXT = 'Confirm';
// const DEFAULT_CANCEL_BTN_TEXT = 'Cancel';
// const DEFAULT_ALERT_BTN_TEXT = 'Done';

const THEME = ['default', 'wide'];
const PopupComponent = ({
  children,
  title,
  description,
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
      { title && <header className={styles.popup__header}>{title}</header> }
      { description && <header className={styles.popup__description}>{description}</header> }
      <article className={styles.popup__content}>{children}</article>
      <footer className={styles.popup__footer}>{
        buttons.map((i, idx) =>
          <div className={styles.popup__footer__button} key={i.key || idx}>
            <Button
              {...i}
              block
              theme="popup"
            />
          </div>
        )
      }</footer>
    </div>
    { bgCloser && <div className={styles.closer} onClick={onClose} /> }
  </section>
);

PopupComponent.propTypes = {
  title: React.PropTypes.string,
  active: React.PropTypes.bool,
  // onClose: React.PropTypes.func,
  // bgCloser: React.PropTypes.bool,
  id: React.PropTypes.string,
};

PopupComponent.defaultProps = {
  active: false,
  bgCloser: true,
};
//
// const AlertComponent = (props) => {
//   const { children, title, ok = DEFAULT_ALERT_BTN_TEXT, theme, active, onClose } = props;
//
//   return (
//     <Popup active={active} title={title} theme={theme} bgCloser={false}>
//       <article>
//         {children}
//       </article>
//       <footer>
//         <Button onClick={onClose}>{ok}</Button>
//       </footer>
//     </Popup>
//   );
// };
//
// AlertComponent.propTypes = {
//   title: React.PropTypes.string,
//   ok: React.PropTypes.string,
//   active: React.PropTypes.bool,
//   theme: React.PropTypes.oneOf(['error', 'success']),
//   onClose: React.PropTypes.func,
// };
//
// AlertComponent.defaultProps = {
//   active: false,
//   ok: DEFAULT_ALERT_BTN_TEXT,
// };
//
// const ConfirmComponent = (props) => {
//   const {
//     confirm = DEFAULT_CONFIRM_BTN_TEXT,
//     cancel = DEFAULT_CANCEL_BTN_TEXT,
//     title, theme, active, children,
//     onCancel, onConfirm, id,
//   } = props;
//
//   return (
//     <Popup id={id} active={active} title={title} theme={theme} bgCloser={false}>
//       <article>
//         {children}
//       </article>
//       <footer>
//         <Button name="popup-confirm-cancel" theme="border" onClick={onCancel}>{cancel}</Button>
//         <Button name="popup-confirm-ok" onClick={onConfirm}>{confirm}</Button>
//       </footer>
//     </Popup>
//   );
// };
//
// ConfirmComponent.propTypes = {
//   title: React.PropTypes.string,
//   confirm: React.PropTypes.string,
//   cancel: React.PropTypes.string,
//   active: React.PropTypes.bool,
//   theme: React.PropTypes.oneOf(['error', 'success']),
//   onCancel: React.PropTypes.func,
//   onConfirm: React.PropTypes.func,
// };
//
// ConfirmComponent.defaultProps = {
//   active: false,
//   confirm: DEFAULT_CONFIRM_BTN_TEXT,
//   cancel: DEFAULT_CANCEL_BTN_TEXT,
// };

export default withStyles(styles)(PopupComponent);
export popup, { reducer, show, hide, getPopup, hideAll } from './PopupContainer';
// export const Alert = withStyles(styles)(AlertComponent);
// export const Confirm = withStyles(styles)(ConfirmComponent);
