//Dependencias
import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
//Estilos
import './css/general.css'
//Componentes
import Principal from './componentes/principal'
import Objetos from './componentes/objetos'
import Header from './componentes/Header'
import Footer from './componentes/footer'
import ClaseForm from './componentes/claseform'
import Pruebas from './componentes/prueba'

const router = createBrowserRouter ([
  {
    path: "/",
    Component: Objetos
  },
  {
    path: "/claseform",
    Component: ClaseForm
  },
  {
    path: "/prueba",
    Component: Pruebas
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>,
)
