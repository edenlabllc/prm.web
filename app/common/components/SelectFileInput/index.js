import React from 'react';
import withStyles from 'withStyles';
import Dropzone from 'react-dropzone';
import Input from 'components/Input';
import Icon from 'components/Icon';

import styles from './styles.scss';

@withStyles(styles)
export default class SelectFileInput extends React.Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }
  state = {
    file: null,
  }
  onDrop(upload) {
    const { input } = this.props;
    const file = upload[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({ file });
      input.onChange(reader.result);
    };
    if (file) reader.readAsDataURL(file);
  }
  render() {
    const { placeholder = 'Select file', label, input, meta, ...rest } = this.props; // eslint-disable-line
    const { file } = this.state;

    return (<Dropzone
      onDrop={this.onDrop}
      className={styles.dropzone}
      {...rest}
    >
      <Input
        theme="date"
        meta={meta}
        label={label}
        input={{ value: file ? file.name : '' }}
        placeholder={placeholder}
        iconRight={<span className={styles.icon}><Icon name="triangle-down" /></span>}
        readOnly
      />
    </Dropzone>);
  }
}
