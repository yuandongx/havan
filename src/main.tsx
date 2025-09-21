import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { RouterProvider } from 'react-router'
// import App from './App.tsx'
import router from "./router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
