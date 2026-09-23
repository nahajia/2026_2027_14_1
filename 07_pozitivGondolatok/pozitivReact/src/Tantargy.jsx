import { useState } from "react"
import TantargyJobbOldal from "./TantargyJobbOldal"
const Tantargy=()=>{
    const [bemenetBal,setBemenetBal]=useState("")
    const [atkuld,setAtkuld]=useState("")
    
     return (
        <div className="keretBal">
            <p>Tantargy</p>
            <div className="ketOszlop">
                    <div className="oszlop">
                        
                        <p>Tantárgy amit szeretsz:</p>
                        <input type="text" 
                            onChange={(e)=>setBemenetBal(e.target.value)} />

                        <button onClick={() => setAtkuld(bemenetBal)}>Átküld</button>                        
                    </div>
                    <div className="oszlop">
                        <TantargyJobbOldal atkuld={atkuld} />
                    </div>
            </div>
            </div>
    )
}
export default Tantargy