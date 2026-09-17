import { useState } from 'react'

import kep from './kepek/01.jpg'
import './App.css'
import Etelek from './Etelek'
import Italok from './Italok'

function Udvozlet(){
  return (
    <p>Üdvözlet</p>
  )
}
const Haliho=()=>{
  return(
    <div>
        <h2>Halihó</h2>
    </div>
  )
}

function App() {
  return (
          <div>
            <h1>Hello</h1>
            <img src={kep} alt="" />
            <Udvozlet />
            <Haliho />
            <Etelek />
            <Italok />
          </div>
  )
}

export default App
