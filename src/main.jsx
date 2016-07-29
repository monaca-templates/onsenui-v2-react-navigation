import 'react-hot-loader/patch';
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

// Onsen UI Styling and Icons
require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');

import App from './App';

const rootElement = document.getElementById('app');
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootElement
    );
  });
}
