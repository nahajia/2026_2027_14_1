import { useState } from 'react'

import './App.css'
import TemaFelsorolas from './tema/TemaFelsorolas'
import JatekosLenyilo from './jatekos/JatekosLenyilo'
import KerdesDiv from './kerdes/KerdesDiv'
import KeresKerdes from './kerdes/KeresKerdes'

function App() {


  return (
    <div>
      <h1>Legyen ön is milliomos gyakorló project</h1>
      <TemaFelsorolas />
      <JatekosLenyilo />
      <KerdesDiv />
      <KeresKerdes />
    </div>
  )
}

export default App
