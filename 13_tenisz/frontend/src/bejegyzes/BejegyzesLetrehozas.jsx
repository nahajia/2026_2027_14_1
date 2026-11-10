import { useState } from "react"

const BejegyzesLetrehozas=()=>{
    const [ujSzoveg,setUjSzoveg]=useState("")
    return (
        <div>
            <div>
                <input type="text" onChange={(e)=>setUjSzoveg(e.target.value)} />
            </div>

        </div>
    )
}
export default BejegyzesLetrehozas



