import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? JSON.parse(storedTheme) : {
      backgroundColor3: 'rgb(0,0,0)',
      backgroundColor2: 'rgb(32,32,32)',
      backgroundColor: 'rgb(24,24,24)',
      textColor: 'white',
      mainColor: '#00ffff'
    };
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const handleLightModeTheme = () => {
    setTheme({
      backgroundColor3: 'rgb(130,130,130)',
      backgroundColor2: 'rgb(233 238 241)',
      backgroundColor: '#e1e1e1',
      textColor: 'black',
      mainColor: '#0095c7'
    });
  };

  const handleDarkModeTheme = () => {
    setTheme({
      backgroundColor3: 'rgb(0,0,0)',
      backgroundColor2: 'rgb(32,32,32)',
      backgroundColor: 'rgb(24,24,24)',
      textColor: 'white',
      mainColor: '#00ffff'
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, handleLightModeTheme, handleDarkModeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;