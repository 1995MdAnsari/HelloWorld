import React, { useState } from 'react';
import { Button } from 'antd';

import './themeChange.css';
import DarkTheme from './DarkTheme';
import LightTheme from './LightTheme';
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

import {themeConfig} from '../../Component/config/themeConfig'

const ThemeChange = () => {

  const [state, setstate] = useState(false);
  const hanhleDark = () => {
    setstate(true);
  }

  const hanhleLight = () =>
    setstate(false);
  
  const themes = {
    light: 'public/light.css',
    dark: 'public/dark.css',
    // dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
    // light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
  }
  return (
    <div className='container-block'>
      <ThemeSwitcherProvider 
      themeMap={themes}
      defaultTheme={themeConfig.currentTheme} 
      insertionPoint={document.getElementById('inject-styles-here')}
      >
        <h3>Theme Changes</h3>
        <Button onClick={() => hanhleDark()}>Dark btn</Button>
        <br /> <br />
        <Button onClick={() => hanhleLight()}>Light btn</Button>
        <br />
        {state === true ?
          <DarkTheme />
          :
          <LightTheme />
        }

      </ThemeSwitcherProvider>
    </div>
  )
}

export default ThemeChange
