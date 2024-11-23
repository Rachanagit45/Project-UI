// src/pages/AboutUs.jsx
import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import image from '../assets/aboutUs.jpg';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        About Us
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: 2, textAlign: 'center' }}>
        Heart Disease & Diabetes Prediction Project
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Image section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Box
              component="img"
              src={image}
              alt="About Us"
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Paper>
        </Grid>

        {/* Text content section */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            Welcome to the Heart Disease & Diabetes Prediction Project! Our team is dedicated to advancing healthcare through machine learning.
            Our mission is to develop an innovative prediction system that utilizes algorithms like Linear Regression, Support Vector Machines (SVM), and Random Forest to predict the likelihood of heart disease and diabetes based on medical data.
          </Typography>

          <Typography variant="body1" paragraph>
            By analyzing medical data, we aim to provide insights into potential health risks and help users take preventive measures. The project highlights the power of machine learning in the healthcare field and aims to improve patient outcomes by identifying risks early.
          </Typography>

          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Our Vision
          </Typography>
          <Typography variant="body1" paragraph>
            Our vision is to create a world where machine learning helps predict and prevent diseases before they become life-threatening. We strive to provide a tool that empowers healthcare professionals and patients alike to make informed decisions.
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Join us in our journey to revolutionize healthcare!
        </Typography>
      </Box>
    </Container>
          <Footer />
    </>
  );
};

export default AboutUs;
