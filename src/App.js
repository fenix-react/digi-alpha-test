import React from 'react';
import Router from './router/router';
import AllProvider from './providers';

function App() {
  return (
    <AllProvider>
      <Router />
    </AllProvider>
  );
}

export default App;
