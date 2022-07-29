import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'antd/dist/antd.css'; 

import {BrowserRouter} from 'react-router-dom'
import Sample from './HelloWorld/Sample';
import FixedWidth from './HelloWorld/FixedWidth';
import Responsive from './HelloWorld/Responsive';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
