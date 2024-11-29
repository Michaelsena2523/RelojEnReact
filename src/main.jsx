import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RelojTiempo from './reloj'
import './style.css'


const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <RelojTiempo/>
  </StrictMode>,
)
