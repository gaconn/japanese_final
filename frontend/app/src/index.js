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
import LoginPage from './view/page/LoginPage';
import HiraganaPage from './view/page/HiraganaPage';
import HiraganaTheory from './view/page/Hiragana/HiraganaTheory';
import HiraganaExercise from './view/page/Hiragana/HiraganaExercise';
import { Provider } from 'react-redux';
import store from './service/store/store';
import KatakanaPage from './view/page/KatakanaPage';
import KatakanaTheory from './view/page/Katakana/KatakanaTheory';
import KatakanaExercise from './view/page/Katakana/KatakanaExercise';
import AddLesson from './view/page/Lesson/AddLesson';
import SettingLesson from './view/page/Lesson/SettingLesson';

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
          },
          {
            path: "add",
            element: <AddLesson />
          },
          {
            path: "setting/:lessonId",
            element: <SettingLesson />
          }
        ]
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "hiragana",
        element: <HiraganaPage />,
        children: [
          {
            path: "theory",
            element: <HiraganaTheory />
          },
          {
            path: "exercise",
            element: <HiraganaExercise />
          }
        ]
      },
      {
        path: "katakana",
        element: <KatakanaPage />,
        children: [
          {
            path: "theory",
            element: <KatakanaTheory />
          },
          {
            path: "exercise", 
            element: <KatakanaExercise />
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </React.StrictMode>
);