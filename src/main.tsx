
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ApolloProvider } from '@apollo/client/react';
import client from "./apolloClient.tsx";
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router';
import { SnackbarProvider } from './components/private/contexts/ShackbarContext.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <StyledEngineProvider injectFirst>

        <SnackbarProvider>

          {/* <StrictMode> */}
          <App />
          {/* </StrictMode> */}
        </SnackbarProvider>

      </StyledEngineProvider>
    </ApolloProvider>
  </BrowserRouter>
);
