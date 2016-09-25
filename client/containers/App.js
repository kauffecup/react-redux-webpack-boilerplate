import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ExampleComponent from '../components/ExampleComponent';
import {
  exampleSimpleAction,
} from '../actions/actions';

const MyApp = ({ dispatch, exampleState }) => (
  // eslint-disable-next-line
  <div className="my-app" onClick={() => dispatch(exampleSimpleAction())}>
    Hello World
    <ExampleComponent exampleState={exampleState} />
    <ExampleComponent exampleState={exampleState} />
    <ExampleComponent exampleState={exampleState} />
  </div>
);

MyApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  exampleState: PropTypes.object.isRequired,
};

// for now, we want it all!
const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(MyApp);
