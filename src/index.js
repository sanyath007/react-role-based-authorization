import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

/** Setup fake backend */
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);