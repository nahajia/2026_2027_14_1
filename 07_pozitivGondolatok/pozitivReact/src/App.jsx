import { useState } from 'react'

import './App.css'
import kep from './kepek/kep.jpg'
import barossKep from './kepek/baross.webp'

import Keruldel from './Keruldel'
import Tanacsok from './Tanacsok'
import Taplalkozas from './Taplalkozas'
import Hala from './Hala'
import Stresszoldas from './Stresszoldas'

const diak={
  "nev":"Tojásos Tóbiás",
  "iskola":"Baross"
}
const Utazas=()=>{
  return (
    <div className='keretBal'>
      <p>Ha időd és vagyonod engedi utazz sokat:</p>
      <ul>
        <li>Olaszország</li>
        <li>Horvátország</li>
        <li>Törökország</li>
      </ul>
    </div>
  )
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

          <Stresszoldas />
          <Hala />
          <Taplalkozas />
          <Tanacsok />
          <Keruldel />
          <Utazas />
          <Nevjegy />
        </div>
  )
}

export default App
