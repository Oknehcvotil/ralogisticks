import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App/App';
import { store, persistor } from './redux/store';
// eslint-disable-next-line
import i18n from './helpers/translator';
import NavState from 'context/navState';

import 'utils/fonts';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <NavState>
            <App />
          </NavState>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
