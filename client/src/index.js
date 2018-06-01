/* eslint-disable react/jsx-filename-extension */
/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router>
  <App />
</Router>, document.getElementById('root'));
registerServiceWorker();
