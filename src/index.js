import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router } from 'react-router-dom' 
// import {BrowserRouter as Router} from 'react-router-dom' # does not work for gh-pages

import {AppProvider} from './context'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
