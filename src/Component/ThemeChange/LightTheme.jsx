import React, {useState} from 'react'
import { Menu, Switch } from 'antd';

const LightTheme = () => {

    const [themes, setthemes] = useState({
        theme : 'light'
    });

    const changeTheme = (value) =>{
        setthemes({
            theme:value ? 'dark' : 'light',
        })
    }

  return (
    <div>

        <Switch 
        checked = {themes.theme === 'dark'}
        onChange={changeTheme}
        />
      <h3>Light Theme</h3>
    </div>
  )
}

export default LightTheme
