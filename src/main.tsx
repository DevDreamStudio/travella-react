import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import BaseLayout from './app/layouts/BaseLayout';
import { Provider } from 'react-redux';
import { store } from './app/appStore';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
