import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link, Snackbar, Alert } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '' });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });

  const validateFields = () => {
    let isValid = true;
    let errors = { email: '', password: '' };

    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Enter a valid email address';
      isValid = false;
    }

    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const handleLogin = () => {
    if (validateFields()) {
      setSnackbar({
        open: true,
        message: 'Login Successful!',
        severity: 'success',
      });
    } else {
      setSnackbar({
        open: true,
        message: 'Please fix the errors in the form',
        severity: 'error',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Box sx={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: '#F5F5F5' }}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '500px',
            height: '520px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          {/* Header */}
          <Box sx={{ width: '100%', height: '70px', bgcolor: '#08457E', borderRadius: '10px 10px 0 0', mb: 2 }}>
            <Typography
              variant="h6"
              sx={{
                position: 'relative',
                color: '#fff',
                textAlign: 'center',
                top: '15px',
                textTransform: 'uppercase',
                letterSpacing: 12,
              }}
            >
              Login Here
            </Typography>
          </Box>

          {/* Email Field */}
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error.email}
            helperText={error.email}
            InputProps={{
              endAdornment: <AccountCircle sx={{ marginLeft: 1 }} />,
            }}
          />

          {/* Password Field */}
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error.password}
            helperText={error.password}
            InputProps={{
              endAdornment: <Lock sx={{ marginLeft: 1 }} />,
            }}
          />

          {/* Login Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginTop: '20px',
              padding: '10px 20px',
              width: '100%',
            }}
            onClick={handleLogin}
          >
            Login
          </Button>

          {/* Links Section */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '15px',
            }}
          >
            <Link
              href="#register"
              sx={{
                color: '#08457E',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              User Register
            </Link>

            <Link
              href="#forgot-password"
              sx={{
                color: '#08457E',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Forgot Password?
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
