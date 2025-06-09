import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Brand from './pages/Brand.jsx';
import Club from './pages/Club.jsx';
import Contact from './pages/Contact.jsx';
import Third from './pages/Third.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/Home",
    element: <Home/>
  },
  {
    path:"/Brand",
    element:<Brand/>
  },
  {
    path:"/Club",
    element: <Club/>
  }
  ,{
    path:"/Contact",
    element: <Contact/>
  },
  {
    path:"/Third",
    element: <Third/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
