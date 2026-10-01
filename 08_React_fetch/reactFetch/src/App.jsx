import { useState } from 'react'
import Arfolyam from './Arfolyam'
import StarWars from './StarWars'
import Fordito from './Fordito'

import './App.css'

function App() {
  

  return (
      <div>
        <h1>React fetch gyakorlás</h1>
        <div className='haromOszlop'>
            <div className='oszlop'>
                <Arfolyam />
            </div>
            <div className='oszlop'>
                <StarWars />
            </div>
            <div className='oszlop'>
                <Fordito />
            </div>
        </div>
      </div>
  )
}

export default App
