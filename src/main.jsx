import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Route from './componenet/route';
import Home from './componenet/home';
import About from './componenet/about';
import CreatePlan from './componenet/createPlan';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/createPlan",
        element: <CreatePlan></CreatePlan>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
