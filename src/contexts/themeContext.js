import React from 'react';

export const themes = {
  light: 'ligth',
  dark: 'dark',
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
