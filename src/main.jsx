import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { router } from './Routes/Routes.jsx';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <RouterProvider router={router} />
      <ToastContainer  
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  </StrictMode>
);
