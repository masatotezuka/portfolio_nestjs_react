import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/shared/layout/errorBoundary';
import { StyledToastContainer } from './components/shared/parts/toast';
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <ErrorBoundary>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <StyledToastContainer />
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ErrorBoundary>,
);

reportWebVitals();
