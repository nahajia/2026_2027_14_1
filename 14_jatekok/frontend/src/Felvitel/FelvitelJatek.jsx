import { useState } from "react"
import Lenyilo from "../Jatekok/Lenyilo"

const FelvitelJatek=()=>{
    const [kivalasztott,setKivalasztott]=useState(1)
    const [jatek_nev,setJatekNev]=useState("")
    const [jatek_ev,setJatekEv]=useState(2026) 
    const [jatek_ertekeles,setJatekErtekeles]=useState(5) 

    return(
        <div>
            <h2>Új játék felvitele</h2>
            <input 
                        className="form-control mb-3"
                        type="text"
                        placeholder="Adja meg a játék nevét"
                        value={jatek_nev}
                        onChange={(e)=>setJatekNev(e.target.value)}
            />
            <input 
                        min={1980}
                        max={2026}
                        className="form-control mb-3"
                        type="number"
                        placeholder="Adja meg a játék nevét"
                        value={jatek_ev}
                        onChange={(e)=>setJatekEv(e.target.value)}
            />
            <input 
                        min={0}
                        max={10}
                        step={0.1}
                        className="form-control mb-3"
                        type="number"
                        placeholder="Adja meg a játék nevét"
                        value={jatek_ertekeles}
                        onChange={(e)=>setJatekErtekeles(e.target.value)}
            />
            
            
            <Lenyilo kivalasztott={setKivalasztott}/>
        </div>
    )
}
export default FelvitelJatek

