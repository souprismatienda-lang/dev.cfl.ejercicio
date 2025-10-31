//Dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Estilos
import './css/general.css'
//Componentes
import Principal from './componentes/principal'
import Objetos from './componentes/objetos'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Objetos />
  </StrictMode>,
)
