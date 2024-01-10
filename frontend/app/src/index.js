import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import HomePage from './view/page/HomePage';
import MainLayout from './view/layout/MainLayout';
import LessonPage from './view/page/LessonPage';
import Theory from './view/page/Lesson/Theory';
import Exercise from './view/page/Lesson/Exercise';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children : [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "lesson",
        element: <LessonPage />,
        children: [
          {
            path: "theory/:lessonId",
            element: <Theory />
          },
          {
            path: "exercise/:lessonId",
            element: <Exercise />
          }
        ]
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