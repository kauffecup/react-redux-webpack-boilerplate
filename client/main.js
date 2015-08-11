import React     from 'react';
import Actions   from './Actions';
import Constants from './constants/Constants';
import ExampleStore from './stores/ExampleStore';

class MyApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = this._getStateObj();
    this._onChange = e => this.setState(this._getStateObj());
  }

  render () {
    return <div className="my-app">Hello World</div>;
  }

  _getStateObj () {
    return {
      exampleState: ExampleStore.getState()
    }
  }

  componentDidMount () {
    ExampleStore.addChangeListener(this._onChange);
  }
};

React.render(<MyApp />, document.body);
