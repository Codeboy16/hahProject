import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from '@auth0/auth0-react';

const root = createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-oyhe2njqsvevlbeg.us.auth0.com"
    clientId="ufUKwg5xAgIBUdmh8oSkzGu2iBJe4pD9"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
   
      <App />
    
  </Auth0Provider>
);