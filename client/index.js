import React          from 'react';
import { render }     from 'react-dom';
import { Provider }   from 'react-redux';
import Root           from './containers/Root';
import configureStore from './store/configureStore';

// load our css. there probably is a better way to do this
// but for now this is our move
require('./style.less');
// make sure all es6 things work correctly in all browsers
require('babel/polyfill');

let store = configureStore();
let rootElement = document.getElementById('root');

// React.initializeTouchEvents(true);
render( <Root store={store} />, rootElement );
