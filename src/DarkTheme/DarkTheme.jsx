import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyle";
import StudentList from "./StudentList";
import { lightTheme, darkTheme } from "./Theme"

const DarkTheme = () => {


    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
            <ThemeProvider theme={theme === 'light' ? 
            lightTheme : darkTheme}
            >
                <>
                    <GlobalStyles />
                    <div className="App">
                        <h2>Students List : </h2>
                        <StudentList/>
                        <button onClick={themeToggler}>Switch Theme</button>
                        
                    </div>
                </>
            </ThemeProvider>
    )
}

export default DarkTheme
