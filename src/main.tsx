import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { SideProvider } from './context/side.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SideProvider>
         <App />
      </SideProvider>    
    </BrowserRouter> 
  </StrictMode>,
)
