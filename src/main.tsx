import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Peliculas from './Peliculas.tsx'
import Titulo from './Titulo.tsx'
import Menu from './Menu.tsx'
import Footer from './Footer.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Titulo></Titulo>
    <Menu></Menu>
    <Peliculas></Peliculas>
    <Footer></Footer>
  </StrictMode>,
)
