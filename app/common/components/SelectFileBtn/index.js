import React from 'react';
import withStyles from 'withStyles';
import SelectFile from 'components/SelectFile';
import Icon from 'components/Icon';
// import Button from 'components/Button';
import styles from './styles.scss';

@withStyles(styles)
export default class SelectFileBtn extends React.Component {
  get color() {
    return (this.props.meta.touched || (this.props.meta.dirty && this.props.meta.visited))
    && !this.props.meta.active && this.props.meta.error ? 'red' : 'blue';
  }
  render() {
    const { children, input, meta } = this.props; // eslint-disable-line
    return (
      <SelectFile
        accept="image/*"
        {...this.props}
      >
        <span className={styles.plus}>
          <Icon name="exit" />
        </span>
      </SelectFile>);
  }
}
