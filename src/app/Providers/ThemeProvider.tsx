import { useEffect, useState } from 'react';

import { ThemeContext } from '../contexts';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    let storedTheme = window.localStorage.getItem('betfight-theme');

    if (storedTheme) return storedTheme as 'dark' | 'light';
  }

  return 'light';
};

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);
    localStorage.setItem('betfight-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
