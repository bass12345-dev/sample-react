import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Login from './pages/auth/Login.tsx';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import './index.css'
import PageError from './page_error/PageError.tsx';
import Profile from './pages/Profile.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Login />,
    errorElement : <PageError />
  },
  {
    path: '/home',
    element:<App />,
    children : [ 
      {
      path: '/home/profile/:id',
      element:<Profile />
    },
  ],
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
