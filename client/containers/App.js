import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Constants            from '../constants/Constants';
import ExampleComponent     from '../components/ExampleComponent';
import {
  exampleSimpleAction,
  exampleAsyncAction
}   from '../actions/actions';

class MyApp extends Component {
  render () {
    // injected via connect call
    var {dispatch, exampleState} = this.props;
    // to use dispatch in tandum with the example actions, all you need to do is:
    //     dispatch(exampleSimpleAction());

    return (
      <div className="my-app" onClick={() => dispatch(exampleSimpleAction())}>
        Hello World
        <ExampleComponent />
        <ExampleComponent />
        <ExampleComponent />
      </div>
    );
  }
};

// for now, we want it all!
var select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(MyApp)
