import { useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
// import './App.css'


import { createTheme, ThemeProvider, useColorScheme } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import ResponsiveAppBar from '../components/Header';
import createEmotionCache from '../com/createCache';
import ThemeSwitch from '../components/ThemeSwitch';
import { Outlet } from 'react-router';
const cache = createEmotionCache();
// 定义light和dark模式的主题配置
const lightTheme = createTheme({
  colorSchemes: {
    light: true,
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
});

const darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

export default function Layout() {
  const { setColorScheme, mode: systemMode } = useColorScheme();
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  
  // 初始化时应用系统主题
  useEffect(() => {
    if (systemMode) {
      // @ts-ignore
      setMode(systemMode);
    }
  }, [systemMode]);
  
  const handleThemeSwitch = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    setColorScheme(newMode);
  };
  // 根据当前模式选择主题
  const currentTheme = mode === 'dark' ? darkTheme : lightTheme;
  
  if (typeof window !== 'undefined') {
    return (
      <ThemeProvider theme={currentTheme}>
        <CacheProvider value={cache}>
          <CssBaseline />
          <ResponsiveAppBar>
            <ThemeSwitch onChange={handleThemeSwitch} />
          </ResponsiveAppBar>
          <Outlet />
        </CacheProvider>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <ResponsiveAppBar>
        <ThemeSwitch onChange={handleThemeSwitch} />
      </ResponsiveAppBar>
      <Outlet />
    </ThemeProvider>
  );
}




