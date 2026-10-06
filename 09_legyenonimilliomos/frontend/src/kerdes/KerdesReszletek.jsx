import { useState } from "react"
import KerdesLenyilo from "./KerdesLenyilo"
import KerdesTalalat from "./KerdesTalalat"

const KerdesReszletek=()=>{
    const [kerdes_id,setKerdesId]=useState(2)
    return (
        <div className="keret">
            <p>Egy kérdés részletei</p>
            <div>
                    <KerdesLenyilo kerdes_id={setKerdesId}   />
            </div>
            <div>
                    <div>A kivalasztott kerdes szama: {kerdes_id}</div>
                    <KerdesTalalat kerdes_id={kerdes_id}/>
            </div>
            
        </div>
    )
}
export default KerdesReszletek

