import React, { Component, PropTypes } from 'react';
import { Provider }  from 'react-redux';
import MyApp         from './App';
import DevTools      from './DevTools';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <MyApp />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
