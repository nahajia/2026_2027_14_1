import { useState } from "react"
import LenyiloJatekos from "./LenyiloJatekos"
import Cim from "../Cim"
import Swal from 'sweetalert2'

const BejegyzesLetrehozas=({frissit})=>{
    const [ujSzoveg,setUjSzoveg]=useState("")
    const [ujDatum, setUjDatum] = useState(new Date().toISOString().split("T")[0])
    const [ujKi,setUjKi]=useState("")
    const [ujJatekosId,setUjJatekosId]=useState(1)

    const felvitel=async ()=>{
        if (ujSzoveg.trim() === "" || ujKi.trim() === "") {
            Swal.fire({
                title: "Hiányzó adat!",
                text: "Kérlek, töltsd ki a bejegyzés szövegét és a becenevet!",
                icon: "warning",
                confirmButtonText: "Rendben"
            })
            return
        }
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
                Swal.fire({
                    title: "Sikeres felvitel!",
                    text: data["message"],
                    icon: "success",
                    confirmButtonText: "Rendben"
                })
                  // Mezők alaphelyzetbe állítása
                setUjSzoveg("")
                setUjDatum(new Date().toISOString().split("T")[0])
                setUjKi("")
                setUjJatekosId(1)
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
                        placeholder="Adja meg a bejegyzés szövegét"
                        className="beviteliDoboz"
                        value={ujSzoveg}
                        onChange={(e)=>setUjSzoveg(e.target.value)}
                    />
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
                        value={ujKi}
                        onChange={(e)=>setUjKi(e.target.value)}
                    />
                    <br />
                    <LenyiloJatekos kivalasztott={setUjJatekosId} />
                    <button onClick={felvitel}>Felvitel</button>
            </div>

        </div>
    )
}
export default BejegyzesLetrehozas



