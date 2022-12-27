import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/Layout'
import InfoSerie from './pages/InfoSerie'
import Home from './pages/Home'
// se importa los siguientes parametros y se genera un componente <RouterProvider/> que renderiza como si fuera el app.jsx
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PantallaSerie from './pages/People'
import People from './pages/People'
import Capitulo from './components/Capitulo'
import InfoCapitulo from './components/infoCapitulo'
import PageCapitulo from './pages/PageCapitulo'

// se crea una funcion router con un arreglo donde se generan las rutas mediante un path y un element. El element apunta en este caso a los componentes tipo paginas que se crean en la carpeta pages.

//posteriormente se crea el componente layout y se crea un arreglo llamado children, que va a contener los paths y elementos. En el componente layout se importa el outlet y todo lo que este por encima del componente outlet seria el header y el footer por ejemplo. 
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[

      {
        index:true,
        element:<Home/>

      },

      {
        path:'/people',
        element:<People/>
      },
      {
        path:'/infoserie/:id',
        element:<InfoSerie/>
      },
      {
        path:'/pagecapitulo/:id',
        element:<PageCapitulo/>
      }
     
      

    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
