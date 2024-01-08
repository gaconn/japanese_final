import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import HomePage from './view/page/HomePage';
import MainLayout from './view/layout/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children : [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);