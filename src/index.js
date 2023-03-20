import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LoginPage } from './components/LoginPage/LoginPage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Page404 } from './components/Page404/Page404';
import AirportList from './components/AirportsList/AirportsList';
import AirportDetails from './components/AirportDetails/AirportDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <Page404 />,
  },
  {
    path: '/airport',
    element: <App />,
    children: [
      {
        path: 'list',
        element: <AirportList />,
      },
      {
        path: 'details/:id',
        element: <AirportDetails />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
