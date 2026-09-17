import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import kep from './kepek/kep.jpg'
import barossKep from './kepek/baross.webp'

const diak={
  "nev":"Tojásos Tóbiás",
  "iskola":"Baross"
}

function Nevjegy(){
  return (
    <div className='szegely1'>
        <p>Készítette: {diak.nev}</p>
        <p>{diak.iskola}</p>
        <img src={barossKep} alt="" />
    </div>
  )
}

function App() {

  return (
        <div>
          <h1>Pozitív gondolatok a boldog élethez</h1>
          <img id='vigyor' src={kep} alt="" />

          <Nevjegy />
        </div>
  )
}

export default App
