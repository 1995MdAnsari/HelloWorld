import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import AddImage from './Component/AddImage';
import DownloadImage from './Component/DownloadImage';
import ToggleSwitch from './Component/ToggleSwitch';
import ThemeChange from './Component/ThemeChange/ThemeChange';
import 'antd/dist/antd.css'; 

import DarkTheme from './DarkTheme/DarkTheme';
import CenterAlign from './Center-Align/CenterAlign';
import TwoColumn from './Center-Align/TwoColumn';
import UseEffect from './ReactHook/UseEffect';
import Sample from './HelloWorld/Sample';
import FixedWidth from './HelloWorld/FixedWidth';
import Responsive from './HelloWorld/Responsive';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AddImage /> */}
    {/* <DownloadImage /> */}
    {/* <ToggleSwitch/> */}
    {/* <ThemeChange /> */}
    {/* <App/> */}
    {/* Dark Theme using Dark Style component */}
    {/* <DarkTheme />   */}
    
    {/* <TwoColumn/> */}
    {/* Reacts Hooks */}
    {/* <UseEffect /> */}


    {/* <CenterAlign/> */}
    {/* <Sample/> */}
    {/* <FixedWidth /> */}
    <Responsive/>
  </React.StrictMode>
);
