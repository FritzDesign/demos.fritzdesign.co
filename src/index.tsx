import ReactDOM from 'react-dom/client';
import SiteProvider from './context/SiteContext';
import App from './components/App';
import theme from './themes/ThemeExtension';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);
root.render(
  <SiteProvider>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </ChakraProvider>
  </SiteProvider>
);
