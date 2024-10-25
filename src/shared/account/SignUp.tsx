import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { PublicClientApplication } from '@azure/msal-browser';

// Microsoft Authentication Configuration
const msalConfig = {
  auth: {
    clientId: "YOUR_MICROSOFT_CLIENT_ID",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: window.location.origin,
  },
};

const pca = new PublicClientApplication(msalConfig);

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    localStorage.setItem('authToken', 'fake-jwt-token');
    navigate('/');
  };

  const handleGoogleLoginSuccess = (response: any) => {
    localStorage.setItem('authToken', response.credential);
    navigate('/');
  };

  const handleGoogleLoginFailure = () => {
    alert('Google login failed');
  };

  const handleMicrosoftLogin = async () => {
    try {
      const loginResponse = await pca.loginPopup({ scopes: ["openid", "profile", "email"] });
      localStorage.setItem('authToken', loginResponse.accessToken);
      navigate('/');
    } catch (error) {
      console.error("Microsoft login failed:", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Button onClick={() => navigate('/login')} variant="text">
                Already have an account? Sign In
              </Button>
            </Grid>
          </Grid>
          <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={handleGoogleLoginFailure} useOneTap />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleMicrosoftLogin}
          >
            Sign up with Microsoft
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
