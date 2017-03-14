import React, { Component, PropTypes } from 'react';
import { isPropsChangedAndExist } from 'helpers/props';
import hoistStatics from 'hoist-non-react-statics';

function getDisplayName(ComposedComponent) {
  return ComposedComponent.displayName || ComposedComponent.name || 'Component';
}

const resetOnUrlChange = (...urlParams) => (...actions) =>
  function wrapWithStyles(ComposedComponent) {
    class ResetOnUrlChange extends Component {
      static contextTypes = {
        store: PropTypes.object.isRequired,
      };

      static displayName = `ResetOnUrlChange(${getDisplayName(ComposedComponent)})`;
      static ComposedComponent = ComposedComponent;

      componentWillReceiveProps(props) {
        if (isPropsChangedAndExist(props, this.props, urlParams.map(i => `params.${i}`))) {
          this.callActions();
        }
      }
      componentWillUnmount() {
        this.callActions();
      }
      callActions() {
        actions.map(
          i => this.context.store.dispatch(i(true))
        );
      }
      render() {
        return <ComposedComponent {...this.props} />;
      }
    }

    return hoistStatics(ResetOnUrlChange, ComposedComponent);
  };

export default resetOnUrlChange;
