import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Settings from './pages/Settings'; 
import AboutUs from './pages/AboutUs';
import UserInput from './pages/PredictionInputPage';
import { Settings as SettingsIcon } 
from '@mui/icons-material';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/settings" element={<Settings />} /> 
        <Route path="/about" element={<AboutUs />} /> 
         <Route path="/user-input" element={<UserInput />} /> 

      </Routes>
    </>
  );
}

export default App;
