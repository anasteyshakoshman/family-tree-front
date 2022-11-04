import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Notification from './containers/notification/notification';
import { routes } from './routes';
import { store } from './store';
import './styles/font.css';

const App = () => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                    exact={route.exact} />
            ))}
          </Routes>
          <Notification />
        </BrowserRouter>
      </Provider>
  );
}

export default App;
