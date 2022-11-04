import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotificationContainer from './containers/Notification';
import { routes } from './routes';
import { store } from './store';
import './styles/main.css';

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
          <NotificationContainer />
        </BrowserRouter>
      </Provider>
  );
}

export default App;
