import React, { useState } from 'react'
import TopBar from './components/Topbar'
import SideNav from './components/Sidenav/'
import Cards from './components/Cards'
import { Box, Toolbar, ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '*': {
            'scrollbarWidth': 'thin',
          },
          '*::-webkit-scrollbar': {
            display: 'none',

          },
        },
      },
    },
    spacing: 4,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3EA6FF',
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#FFF',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: '100vh', backgroundColor: theme.palette.background.dark, }}>
        <TopBar darkMode={darkMode} setDarkMode={setDarkMode}></TopBar>
        <Box p={4} display="flex">
          <SideNav></SideNav>
          <Toolbar></Toolbar>
          <Cards darkMode={darkMode} setDarkMode={setDarkMode}></Cards>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
