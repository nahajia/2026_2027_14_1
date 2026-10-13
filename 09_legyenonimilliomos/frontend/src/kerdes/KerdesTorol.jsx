import { useState } from "react"
import KerdesLenyilo from "./KerdesLenyilo"
import KerdesTorloGomb from "./KerdesTorloGomb"

const KerdesTorol=()=>{
    const [kerdes_id,setKerdesId]=useState(0)
    const [sorszam,setSorszam]=useState(0)
    return (
        <div className="keret">
            <p>Egy kérdés törlése</p>
            <div>
                    <KerdesLenyilo kerdes_id={setKerdesId} sorszam={sorszam}  />
            </div>
            <div>
                    <KerdesTorloGomb kerdes_id={kerdes_id} sorszam={setSorszam} />
                    
            </div>
            
        </div>
    )
}
export default KerdesTorol

