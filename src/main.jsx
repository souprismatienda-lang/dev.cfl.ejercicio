//Dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Estilos
import './css/general.css'
//Componentes
import Principal from './componentes/principal'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Principal />
  </StrictMode>,
)
