import { useState } from "react"
import KerdesLenyilo from "./KerdesLenyilo"
import KerdesSzerkeszt from "./KerdesSzerkeszt"

const KerdesModosit=()=>{
    const [kerdes_id,setKerdesId]=useState(0)
    return (
        <div className="keret">
            <p>Egy kérdés részletei</p>
            <div>
                    <KerdesLenyilo kerdes_id={setKerdesId}   />
            </div>
            <div>
                    <div>A kivalasztott kerdes szama: {kerdes_id}</div>
                    <KerdesSzerkeszt kerdes_id={kerdes_id}/>
            </div>
            
        </div>
    )
}
export default KerdesModosit

