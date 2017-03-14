import React from 'react';
import withStyles from 'withStyles';
import styles from './styles.scss';

export default withStyles(styles)(({ text = '', children, ...props }) => (
  <div className={styles.tooltip} data-tooltip={text} {...props}>
    {children}
  </div>
));
