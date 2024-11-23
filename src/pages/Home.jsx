import React from 'react';
import { Container, Typography, Grid, Box, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import doctorImage from '../assets/projectdoc.jpg'; // Add doctor image
import Footer from '../components/Footer';

const Home = () => {
  const navigate = useNavigate();

  const handleStartPrediction = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleGoToPredictionForm = () => {
    navigate('/user-input'); // Navigate to the input form
  };

  return (
    <>
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        Welcome to the Heart Disease & Diabetes Prediction Project
      </Typography>

      <Typography variant="body1" align="center" paragraph>
        This website showcases a comparative analysis of machine learning algorithms: Linear Regression, Support Vector Machines (SVM), and Random Forest, used to predict heart disease and diabetes.
        Explore the website using the navigation bar to learn more about the project, settings, and get insights into health predictions.
      </Typography>

      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Box
              component="img"
              src={doctorImage}
              alt="Doctor"
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 2,
              }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ padding: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              About the Project
            </Typography>
            <Typography variant="body1" paragraph>
              Our project uses machine learning algorithms to predict heart disease and diabetes. By analyzing medical data, we aim to provide insights into possible health risks.
            </Typography>
            <Typography variant="body1" paragraph>
              Explore the accuracy and performance of Linear Regression, SVM, and Random Forest in this innovative health prediction model.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Button variant="contained" color="primary" size="large" onClick={handleStartPrediction} sx={{ marginRight: 2 }}>
          Start Prediction
        </Button>
        <Button variant="contained" color="secondary" size="large" onClick={handleGoToPredictionForm}>
          Go to Prediction Form
        </Button>
      </Box>
    </Container>
    <Footer/>
    </>
  );
};

export default Home;
