import React, { Component } from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { connect } from 'react-redux';
import { hide } from './redux';

function getDisplayName(ComposedComponent) {
  return ComposedComponent.displayName || ComposedComponent.name || 'Component';
}

const popup = ({
  name,
  unmountOnHide = true,
}) => (ComposedComponent) => {
  class PopupContainer extends Component {

    static displayName = `PopupContainer(${getDisplayName(ComposedComponent)})`;
    static ComposedComponent = ComposedComponent;


    render() {
      if (unmountOnHide) {
        return this.props.popup && this.props.popup.active
          ? <ComposedComponent {...this.props} />
          : null;
      }
      return <ComposedComponent {...this.props} />;
    }
  }
  return connect(state => ({ popup: state.popup[name] }), { handleClose: () => hide(name) })(
    hoistStatics(PopupContainer, ComposedComponent)
  );
};

export default popup;
export reducer, { show, hide, getPopup, hideAll } from './redux';
