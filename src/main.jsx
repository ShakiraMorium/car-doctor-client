import React from 'react'
import * as ReactDOM from "react-dom/client";

import './index.css'

import router from './Routes/Router.jsx';
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Providers/AuthProvider.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </div>
)
