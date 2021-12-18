import React from 'react';
import { persistor, store } from './stores/store';
import theme from 'theme/theme';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
            <CssBaseline />
            {children}
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default Providers;
