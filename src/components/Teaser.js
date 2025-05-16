import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Teaser = () => {
return(
     <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
          <Typography variant="h3" gutterBottom>
            Welcome to MUI
          </Typography>
          <Typography variant="body1" gutterBottom>
            This is a simple React app using Material UI.
          </Typography>
          <Button variant="contained" color="primary">
            Click Me
          </Button>
        </Container>
);};
export default Teaser;