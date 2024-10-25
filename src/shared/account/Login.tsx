import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { PublicClientApplication } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
import { Link } from 'react-router-dom';

// Microsoft Authentication Configuration
const client_id =  "AIzaSyCt2Yup_FM4MoZOxvzQl7vaRBg-CaAX9qA"; // Replace with your Microsoft client ID
; // Replace with your Microsoft client ID
const msalConfig = {
  auth: {
    clientId: client_id, // Your Microsoft client ID
    authority: "https://login.microsoftonline.com/common",
    redirectUri: window.location.origin,
  },
};

const pca = new PublicClientApplication(msalConfig);

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'admin@test.com' && password === 'password123') {
      // Simulate backend auth and store token
      localStorage.setItem('authToken', 'fake-jwt-token');
      navigate('/');

      // Trigger browser password manager (will prompt to save credentials)
      const loginForm = document.getElementById("login-form") as HTMLFormElement;
      loginForm.submit();
    } else {
      alert('Invalid login credentials');
    }
  };

  const handleGoogleLoginSuccess = (response: CredentialResponse) => {
    console.log(response)
    if (response) {
        localStorage.setItem('authToken', response.credential as string);
    }
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
      alert('Microsoft login failed');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" id="login-form" sx={{ mt: 1 }}>
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
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
            // clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your Google Client ID
            useOneTap
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleMicrosoftLogin}
          >
            Sign in with Microsoft
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
