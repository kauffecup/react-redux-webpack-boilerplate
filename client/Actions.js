import Dispatcher from './Dispatcher';
import Constants  from './constants/Constants';

var Actions = {
  exampleAction: function (bot) {
    Dispatcher.dispatch({ actionType: Constants.EXAMPLE_CONSTANT });
  }
}

module.exports = Actions;
