import { useState } from "react"
import LenyiloJatekos from "./LenyiloJatekos"
import Cim from "../Cim"

const BejegyzesLetrehozas=({frissit})=>{
    const [ujSzoveg,setUjSzoveg]=useState("")
    const [ujDatum,setUjDatum]=useState("2020-11-10")
    const [ujKi,setUjKi]=useState("")
    const [ujJatekosId,setUjJatekosId]=useState(1)

    const felvitel=async ()=>{
        try{
            const adatok={
                "bejegyzes_szoveg":ujSzoveg,
                "bejegyzes_datum":ujDatum,
                "bejegyzes_ki":ujKi,
                "bejegyzes_jatekos_id":ujJatekosId
            }
            const response=await fetch(Cim+"bejegyzesFelvitel",
                {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(adatok)
            }
            )
            const data=await response.json()
            //alert(JSON.stringify(data))
            if (response.ok){
                alert(data["message"])
                frissit((ertek)=>(!ertek))
              
            }
        }
        catch (error){
            console.log(error)
            alert(data["error"])
        }
    }


    return (
        <div>
            <div className="dobozFelvitel">
                <textarea
                    type="text" 
                    placeholder="Adja meg a bejegyzés szövegét"
                    className="beviteliDoboz"
                    onChange={(e)=>setUjSzoveg(e.target.value)} />
                <br />
                <input 
                    type="date" 
                    value={ujDatum}
                    onChange={(e)=>setUjDatum(e.target.value)}
                    />
                <br />
                <input 
                    type="text"
                    placeholder="Adjon meg egy becenevet"
                    onChange={(e)=>setUjKi(e.target.value)}
                    />
                <LenyiloJatekos kivalasztott={setUjJatekosId} />
                <button onClick={felvitel}>Felvitel</button>
            </div>

        </div>
    )
}
export default BejegyzesLetrehozas



