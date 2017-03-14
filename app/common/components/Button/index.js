import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';

import Icon, { icons } from 'components/Icon';

import styles from './styles.scss';

const THEMES = ['white', 'popup', 'popup-clean', 'transfer'];
const URL_TEST_REG_EXP = /^((?:[a-z]+:)?\/\/)|mailto:/i;

const Button = (props) => {
  const {
    theme = THEMES[0],
    active = false,
    disabled = false,
    block = false,
    type = 'button',
    onClick,
    icon, iconRight,
    to,
    children,
    ...rest,
  } = props;

  const className = classnames(
    styles.button,
    styles[`theme-${theme}`],
    active && styles.active,
    disabled && styles.disabled,
    block && styles.block,
  );

  const content = (
    <span>
      {icon && <span className={styles.icon}><Icon name={icon} /></span>}
      {children}
      {iconRight && <span className={styles.iconRight}><Icon name={iconRight} /></span>}
    </span>
  );

  if (to === undefined) {
    return (
      <button
        {...rest}
        disabled={disabled}
        name={name}
        onClick={onClick}
        type={type}
        className={className}
      >
        {content}
      </button>
    );
  }
  if (URL_TEST_REG_EXP.test(to)) {
    return (
      <a {...rest} href={to} onClick={onClick} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link {...rest} to={to} onClick={onClick} className={className}>{content}</Link>
  );
};

Button.propTypes = {
  theme: React.PropTypes.oneOf(THEMES),
  type: React.PropTypes.string,
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  block: React.PropTypes.bool,
  to: React.PropTypes.string,
  icon: React.PropTypes.oneOf(icons),
  iconRight: React.PropTypes.oneOf(icons),
  onClick: React.PropTypes.func,
};

export default withStyles(styles)(Button);
export const ButtonsGroup = withStyles(styles)(
  ({ children, ...props }) => (<div {...props} className={styles.buttonsGroup}>
    {
      React.Children.toArray(children).map((i, key) =>
        <div className={styles.buttonsGroupItem} key={key}>{i}</div>
      )
    }
  </div>)
);
