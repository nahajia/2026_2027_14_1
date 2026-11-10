import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import BejegyzesLista from './bejegyzes/BejegyzesLista'
import BejegyzesLetrehozas from './bejegyzes/BejegyzesLetrehozas'
function App() {
 
  const [frissit,setFrissit]=useState(false)

  return (
        <div>
          <h1>Tenisz hírek</h1>
          <BejegyzesLetrehozas frissit={setFrissit} />
          <BejegyzesLista frissit={frissit} />
        </div>
  )
}

export default App
