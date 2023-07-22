import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Pages/Main/Main.jsx';
import Home from './Pages/Shared/Home/Home/Home';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
          {
            path: '/',
            element: <Home></Home>
          }
    ]
  },
  {
    path: '/*',
    element: <div>Error 404</div>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
