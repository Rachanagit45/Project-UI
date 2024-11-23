import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { Facebook, Instagram, Mail, Chat } from '@mui/icons-material'; // Importing the icons

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        padding: 2,
        marginTop: 4,
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="h6">About Us</Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>

        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          &copy; {new Date().getFullYear()} Heart Disease & Diabetes Prediction Project
        </Typography>

        {/* Social Media Icons */}
        <Box sx={{ marginTop: 2 }}>
          <IconButton color="inherit" href="" target="_blank">
            <Facebook />
          </IconButton>
          <IconButton color="inherit" href="https://instagram.com" target="_blank">
            <Instagram />
          </IconButton>
          <IconButton color="inherit" href="mailto:example@example.com" target="_blank">
            <Mail />
          </IconButton>
          <IconButton color="inherit" href="https://viber.com" target="_blank">
            <Chat />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
