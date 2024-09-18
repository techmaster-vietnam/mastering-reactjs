import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StoresProvider } from './providers/StoresProvider'

createRoot(document.getElementById('root')!).render(
  <StoresProvider>
    <App />
  </StoresProvider>,
)
