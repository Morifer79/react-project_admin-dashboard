import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { GlobalStyle } from './stylesheet/GlobalStyle.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import { theme } from './stylesheet/theme';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/react-project_admin-dashboard">
            <App />
            <GlobalStyle />
            <Toaster />
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
