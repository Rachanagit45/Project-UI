import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const SignUp = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Sign Up
      </Button>
    </Container>
  );
};

export default SignUp;
