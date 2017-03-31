import React from 'react';
import withStyles from 'withStyles';
import Dropzone from 'react-dropzone';

import styles from './styles.scss';

@withStyles(styles)
export default class SelectFile extends React.Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }
  onDrop(upload) {
    const { input } = this.props;
    const file = upload[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      input.onChange(reader.result);
    };
    if (file) reader.readAsDataURL(file);
  }
  render() {
    const { children, input, meta, ...rest } = this.props; // eslint-disable-line
    return (<Dropzone
      onDrop={this.onDrop}
      className={styles.dropzone}
      {...rest}
    >
      {children}
    </Dropzone>);
  }
}
