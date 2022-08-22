import React from 'react';
import { createRoot } from 'react-dom/client';
import ons from 'onsenui';

// Onsen UI Styling and Icons
import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/onsenui.css';

import App from './App';

if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}

const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
