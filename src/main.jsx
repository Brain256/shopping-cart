import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Store from './Store.jsx'; 
import Home from './Home.jsx'; 
import App from './App.jsx'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {path:'', element:<Home />},
      {path:'store', element:<Store />}
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
