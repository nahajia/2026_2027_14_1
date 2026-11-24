
import { useState } from "react"
import LenyiloJatek from "./LenyiloJatek"
import ModositBefejez from "./ModositBefejez"

const Modosit=()=>{
    const [kivalasztott,setKivalasztott]=useState(1)
    const [talalat,setTalalat]=useState(false)
    return(
        <div>
            <h2>Módosítás</h2>
            <div>
                <LenyiloJatek kivalasztott={setKivalasztott} talalat={talalat}/>
                <button className="btn btn-primary" onClick={()=>setTalalat(true)}>Játék adatainak keresése</button>
            </div>
            <div>

                {talalat && <ModositBefejez kivalasztott={kivalasztott} talalat={setTalalat}/> }

                {/* {talalat?
                <ModositBefejez />:
                null} */}
            </div>
        </div>
    )
}
export default Modosit