import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Actors from './Components/Actors'

function App() {

  return (
    <>
      <Header></Header>
      <div>
      <Actors></Actors>
      </div>
    </>
  )
}

export default App
