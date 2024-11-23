import React from 'react';
import { Container, Typography, TextField, Button, Link } from '@mui/material';

const SignIn = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Sign In
      </Typography>
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
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Sign In
      </Button>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        <Link href="/signup" underline="hover">
          If you don't have an account, Sign Up
        </Link>
      </Typography>
      <Typography variant="body2" align="center" sx={{ mt: 1 }}>
        <Link href="/forgot-password" underline="hover">
          Forgot Password?
        </Link>
      </Typography>
    </Container>
  );
};

export default SignIn;
