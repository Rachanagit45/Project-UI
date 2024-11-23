import React from 'react';
import { Container, Typography, Grid, Button, Box, Avatar, Divider, FormControlLabel, Switch, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import profilePic from '../assets/doctor.webp'; // Profile picture
import SupportIcon from '@mui/icons-material/Help'; // Support Icon
import NotificationsIcon from '@mui/icons-material/Notifications'; // Notifications Icon
import FingerprintIcon from '@mui/icons-material/Fingerprint'; // Face ID Icon
import LockIcon from '@mui/icons-material/Lock'; // PIN Code Icon
import LogoutIcon from '@mui/icons-material/ExitToApp'; // Logout Icon

const Settings = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions if necessary, then redirect to the Home page
    console.log('Logged out');
    navigate('/');  // Redirect to the Home page
  };

  return (
    <Container sx={{ marginTop: 4, maxWidth: 'sm' }}>
      {/* Profile Section */}
      <Box sx={{ textAlign: 'center' }}>
        <Avatar src={profilePic} sx={{ width: 100, height: 100, margin: 'auto' }} />
        <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>
          John Doe
        </Typography>
        <Typography variant="body2" color="text.secondary">
          john.doe@example.com
        </Typography>
        <Button variant="outlined" sx={{ marginTop: 2 }}>
          Edit Profile
        </Button>
      </Box>

      <Divider sx={{ marginTop: 4 }} />

      {/* Inventory Section */}
      <Typography variant="h6" sx={{ marginTop: 4, fontWeight: 'bold' }}>
        Inventories
      </Typography>
      <List>
        <ListItem button>
          <ListItemText primary="My Stores" secondary="2" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><SupportIcon /></ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
      </List>

      <Divider sx={{ marginTop: 2 }} />

      {/* Preferences Section */}
      <Typography variant="h6" sx={{ marginTop: 4, fontWeight: 'bold' }}>
        Preferences
      </Typography>
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Push Notifications"
        sx={{ width: '100%' }}
        icon={<NotificationsIcon />}
      />
      <FormControlLabel
        control={<Switch />}
        label="Face ID"
        sx={{ width: '100%' }}
        icon={<FingerprintIcon />}
      />
      <FormControlLabel
        control={<Switch />}
        label="PIN Code"
        sx={{ width: '100%' }}
        icon={<LockIcon />}
      />

      <Divider sx={{ marginTop: 2 }} />

      {/* Logout Section */}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Button variant="contained" color="error" onClick={handleLogout} startIcon={<LogoutIcon />}>
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Settings;
