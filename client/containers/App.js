import React, { Component, PropTypes } from 'react';
import { connect }      from 'react-redux';
import ExampleComponent from '../components/ExampleComponent';
import {
  exampleSimpleAction
}   from '../actions/actions';

class MyApp extends Component {
  render() {
    // injected via connect call
    const {dispatch, exampleState} = this.props;
    // to use dispatch in tandum with the example actions, all you need to do is:
    //     dispatch(exampleSimpleAction());

    return (
      <div className="my-app" onClick={() => dispatch(exampleSimpleAction())}>
        Hello World
        <ExampleComponent exampleState={exampleState} />
        <ExampleComponent exampleState={exampleState} />
        <ExampleComponent exampleState={exampleState} />
      </div>
    );
  }
}

MyApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  exampleState: PropTypes.object.isRequired
};

// for now, we want it all!
const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(MyApp);
