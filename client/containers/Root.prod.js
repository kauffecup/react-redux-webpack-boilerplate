import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import MyApp from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <MyApp />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
