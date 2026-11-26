
import { useState } from "react"
import LenyiloJatek2 from "./LenyiloJatek2"
import ModositBefejez2 from "./ModositBefejez2"

const Modosit2=()=>{
    const [kivalasztott,setKivalasztott]=useState(1)
    const [talalat,setTalalat]=useState(false)
    return(
        <div>
            <h2>Módosítás</h2>
            <div>
                <LenyiloJatek2 kivalasztott={setKivalasztott} talalat={talalat}/>
                <button className="btn btn-primary" onClick={()=>setTalalat(true)}>Játék adatainak keresése</button>
            </div>
            <div>

                {talalat && <ModositBefejez2 kivalasztott={kivalasztott} talalat={setTalalat}/> }

                {/* {talalat?
                <ModositBefejez />:
                null} */}
            </div>
        </div>
    )
}
export default Modosit2