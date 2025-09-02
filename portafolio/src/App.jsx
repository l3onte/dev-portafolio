import { useState } from 'react'
import Header from './components/Header'
import Info from './components/Info'
import Habilidades from './components/Habilidades'
import Experiencia from './components/Experiencia'
import Contacto from './components/Contacto'

function App() {
  return (
    <>
      <Header />
      <main className='flex flex-col min-h-screen'>
        <Info />
        <Habilidades />
        <Experiencia />
        <Contacto />
      </main>
    </>
  )
}

export default App
