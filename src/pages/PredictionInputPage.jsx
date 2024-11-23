// src/pages/UserInput.js
import React, { useState } from 'react';
import { Container, TextField, Button, Box, Grid, Typography } from '@mui/material';

const UserInput = () => {
  // State to hold input values
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would handle the form data, for example, calling an API to get a prediction
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Enter Your Details for Prediction
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Age"
              type="number"
              fullWidth
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Sex"
              fullWidth
              name="sex"
              value={formData.sex}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="CP"
              fullWidth
              name="cp"
              value={formData.cp}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Trestbps"
              fullWidth
              name="trestbps"
              value={formData.trestbps}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Chol"
              fullWidth
              name="chol"
              value={formData.chol}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="FBS"
              fullWidth
              name="fbs"
              value={formData.fbs}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Restecg"
              fullWidth
              name="restecg"
              value={formData.restecg}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Thalach"
              fullWidth
              name="thalach"
              value={formData.thalach}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Exang"
              fullWidth
              name="exang"
              value={formData.exang}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Oldpeak"
              fullWidth
              name="oldpeak"
              value={formData.oldpeak}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Slope"
              fullWidth
              name="slope"
              value={formData.slope}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="CA"
              fullWidth
              name="ca"
              value={formData.ca}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Thal"
              fullWidth
              name="thal"
              value={formData.thal}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" type="submit" size="large">
              Predict
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UserInput;
