import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import { MsalProvider } from '@azure/msal-react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PublicClientApplication } from '@azure/msal-browser';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

const msalConfig = {
    auth: {
        clientId: "YOUR_MICROSOFT_CLIENT_ID",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: window.location.origin,
    },
};
const msalInstance = new PublicClientApplication(msalConfig);

const client_id = '937671956547-rctem8dpbtvjjhd56ndh8sro96am9hms.apps.googleusercontent.com';

const Root = () => {
    // Use state for theme toggle, reading from local storage
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : false; // Default to light theme if not set
    });

    // useEffect to sync theme preference with localStorage
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(isDarkMode));
    }, [isDarkMode]);



    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Provider store={store}>
                <GoogleOAuthProvider clientId={client_id}>
                    <MsalProvider instance={msalInstance}>
                        <App />
                    </MsalProvider>
                </GoogleOAuthProvider>
            </Provider>
        </ThemeProvider>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));
