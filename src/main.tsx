
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ApolloProvider } from '@apollo/client/react';
import client from "./apolloClient.tsx";
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router';
import { SnackbarProvider } from './components/private/providers/ShackbarContext.tsx';
import { UserProvider } from './components/private/providers/UserProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <StyledEngineProvider injectFirst>
        <SnackbarProvider>
          <UserProvider>
            {/* <StrictMode> */}
            <App />
            {/* </StrictMode> */}
          </UserProvider>
        </SnackbarProvider>
      </StyledEngineProvider>
    </ApolloProvider>
  </BrowserRouter>
);
