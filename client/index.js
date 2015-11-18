import React         from 'react';
import { render }    from 'react-dom';
import { Provider }  from 'react-redux';
import thunk         from 'redux-thunk';
import MyComponent   from './components/main';
import myApp         from './reducers/myApp';
import {
  createStore,
  applyMiddleware
} from 'redux';

// load our css. there probably is a better way to do this
// but for now this is our move
require('./style.less');
// make sure all es6 things work correctly in all browsers
require('babel/polyfill');

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

let store = createStoreWithMiddleware(myApp);
let rootElement = document.getElementById('root');

// React.initializeTouchEvents(true);
render(
  <Provider store={store}>
    <MyComponent />
  </Provider>,
  rootElement
);
