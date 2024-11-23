import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const ForgotPassword = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Forgot Password
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        Enter your email address, and we’ll send you a link to reset your password.
      </Typography>
      <TextField
        label="Email Address"
        type="email"
        fullWidth
        margin="normal"
        variant="outlined"
        autoComplete="email"
      />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Send Reset Link
      </Button>
    </Container>
  );
};

export default ForgotPassword;
