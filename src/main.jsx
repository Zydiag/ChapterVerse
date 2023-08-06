import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import { ScrollToTop } from './components';
import { FilterContextProvider, CartContextProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <FilterContextProvider>
          <ScrollToTop />
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            pauseOnHover={false}
            closeOnClick
            closeButton={false}
          />
          <App />
        </FilterContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  // </React.StrictMode>
);
