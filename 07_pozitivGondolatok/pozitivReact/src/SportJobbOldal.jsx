import { useState } from "react"

const SportJobbOldal=({bemenetBal,vissza})=>{
    const [bemenetJobb,setBemenetJobb]=useState("")
    return (
        <div>
            <p>Ez a sport a kedvenced: {bemenetBal}</p>
            <p>Add meg azt a sportot, amit utálsz:</p>
            <input type="text" onChange={(e)=>setBemenetJobb(e.target.value)} />
            <button onClick={()=>vissza(bemenetJobb)}>Visszaküld</button>
        </div>
    )
}
export default SportJobbOldal