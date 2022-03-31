import './assets/fonts/style.css';
import './assets/global.scss';

import { Provider } from 'react-redux';
import { createStore } from './redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TestPage } from './pages';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ProtectedRoutes } from './utils/router/ProtectedRoutes';

const store = createStore(); // Possible additional params to store init func
const persistor = persistStore(store);

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<TestPage />} />
            <Route element={<ProtectedRoutes />}>
              <></>
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};