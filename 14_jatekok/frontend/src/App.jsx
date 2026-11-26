import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Navbar from './Navbar'
import Jatekok from './Jatekok/Jatekok'
import KeresesNev from './Kereses/KeresesNev'
import KeresesAr from './Kereses/KeresesAr'
import FelvitelJatek from './Felvitel/FelvitelJatek'
import TorlesJatek from './Torles/TorlesJatek'
import Modosit from './Modosit/Modosit'
import Modosit2 from './Modosit2/Modosit2'

function App() {
    return (
        <Router>
            <Navbar />

            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<Jatekok />} />
                    <Route path="/jatekok" element={<Jatekok />} />
                    <Route path="/keresesNev" element={<KeresesNev />} />
                    <Route path="/keresesAr" element={<KeresesAr />} />
                    <Route path="/felvitelJatek" element={<FelvitelJatek />} />
                    <Route path="/torlesJatek" element={<TorlesJatek />} />
                    <Route path="/modosit" element={<Modosit />} />
                    <Route path="/modosit2" element={<Modosit2 />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
