import _Store     from './_Store';
import Dispatcher from '../Dispatcher';
import Constants  from '../constants/Constants';
import assign     from 'object-assign';

var _exampleState = {};

function setState (newState) {
  _exampleState = newState;
}

var ExampleStore = assign({}, _Store, {
  getState: function () {
    return _exampleState;
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.EXAMPLE_CONSTANT:
      setState({});
      ExampleStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = ExampleStore;
