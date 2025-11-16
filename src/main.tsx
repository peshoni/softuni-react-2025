
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ApolloProvider } from '@apollo/client/react';
import client from "./apolloClient.tsx";
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <StyledEngineProvider injectFirst>
        <StrictMode>
          <App />
        </StrictMode>
      </StyledEngineProvider>
    </ApolloProvider>
  </BrowserRouter>
);
