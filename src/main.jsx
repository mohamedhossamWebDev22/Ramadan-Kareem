import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.scss"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Eng from './eng.jsx';

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    errorElement: <>Error 404.</>,
  },
  {
    path: "/Eng",
    element: <Eng />,
    errorElement: <>Error 404.</>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
