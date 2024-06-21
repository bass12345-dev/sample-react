import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import './index.css'
import PageError from './page_error/PageError.tsx';
import Login from './admin/pages/auth/Login.tsx';
import Admin_layout from './admin/layout/admin_layout.tsx';
import Admin_Dashboard from './admin/pages/dashboard/Admin_Dashboard.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element:<Login />,
    errorElement : <PageError />
  },

  {
    path: '/admin',
    element:<Admin_layout />,
    children : [ 
      {
      path: '/admin/dashboard',
      element:<Admin_Dashboard />
    },
  ],
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
