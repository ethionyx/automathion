import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import { MsalProvider } from '@azure/msal-react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: "YOUR_MICROSOFT_CLIENT_ID", // Replace with your Microsoft Client ID
    authority: "https://login.microsoftonline.com/common",
    redirectUri: window.location.origin,
  },
};
const msalInstance = new PublicClientApplication(msalConfig);

// Replace with your actual Google Client ID
const client_id =  '937671956547-rctem8dpbtvjjhd56ndh8sro96am9hms.apps.googleusercontent.com'; // Replace with your Microsoft client ID

const GOOGLE_CLIENT_ID = client_id;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={'937671956547-rctem8dpbtvjjhd56ndh8sro96am9hms.apps.googleusercontent.com'}>
        {/* Wrap with Microsoft MSAL provider */}
        <MsalProvider instance={msalInstance}>
          <App />
        </MsalProvider>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
