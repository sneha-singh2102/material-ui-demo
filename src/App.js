import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Header from './components/Header/Header';
import { useLocation } from 'react-router-dom';

function App() {
  const [title, setTitle] = useState(null);
  const location = useLocation();

  function toCamelCase(str) {
    return str
      .replace(/\W+(.)/g, (_, chr) => chr.toUpperCase())
      .replace(/^\w/, chr => chr.toUpperCase());
  }

  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, ' ');
    const camelCaseTitle = toCamelCase(parsedTitle);
    setTitle(camelCaseTitle);
  }, [location]);

  return (

    <Grid container>
      <Navbar />
      <Grid item xs style={{ marginLeft: '250px', width: 'calc(100% - 250px)' }}>
        <Header title={title} />
        <Box sx={{ px: 2, flex: 1 }}>
                  <Outlet />
                </Box>
      </Grid>
    </Grid>
  );
}

export default App;