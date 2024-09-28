  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import App from './App.jsx'
  import { GoogleOAuthProvider } from '@react-oauth/google';
  import './style/index.css'
  import 'bootstrap/dist/css/bootstrap.min.css';
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  )
