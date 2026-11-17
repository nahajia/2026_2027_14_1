import { useState } from "react"
import Lenyilo from "../Jatekok/Lenyilo"
import Cim from "../Cim"

const FelvitelJatek=()=>{
    const [kivalasztott,setKivalasztott]=useState(1)
    const [jatek_nev,setJatekNev]=useState("")
    const [jatek_ev,setJatekEv]=useState(2026) 
    const [jatek_ertekeles,setJatekErtekeles]=useState(5) 
    const [jatek_ar,setJatekAr]=useState(0) 
    const [jatek_leiras,setJatekLeiras]=useState("") 

    const [uzenet,setUzenet]=useState("") 

    const felvitel=async ()=>{
        try{
            if (jatek_nev.trim()===""){
                setUzenet("A játék nevét kötelező megadni")
                return
            }
            if (isNaN(jatek_ar)){
                setUzenet("A játék árához számot adjon meg")
                return
            }
            if (parseFloat(jatek_ar)<0){
                setUzenet("A játék ára pozitív szám lehet")
                return
            }

            const adatok={
                "jatek_nev": jatek_nev,
                "jatek_ev":jatek_ev, 
                "jatek_ertekeles":jatek_ertekeles ,
                "jatek_ar":jatek_ar,
                "jatek_leiras": jatek_leiras, 
                "jatek_kep":"none.jpg",
                "jatek_platform_id":kivalasztott
            }
            const response=await fetch(Cim+"/jatekFelvitel",
                {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(adatok)
            }
            )
            const data=await response.json()
            if (response.ok){
                //alert("sikeres")
                setUzenet(data["message"])
            }
            else{
                setUzenet(data["error"])
            }
        }
        catch (error){
            console.log(error)
            setUzenet("Hiba")
        }

    }



    return(
        <div>
            <h2>Új játék felvitele</h2>
            <input 
                        className="form-control mb-3"
                        type="text"
                        placeholder="Adja meg a játék nevét"
                        value={jatek_nev}
                        onChange={(e)=>setJatekNev(e.target.value)}
            />
            <input 
                        min={1980}
                        max={2026}
                        className="form-control mb-3"
                        type="number"
                        placeholder="Adja meg a játék kiadási évét"
                        value={jatek_ev}
                        onChange={(e)=>setJatekEv(e.target.value)}
            />
            <input 
                        min={0}
                        max={10}
                        step={0.1}
                        className="form-control mb-3"
                        type="number"
                        placeholder="Adja meg a játék értékelését"
                        value={jatek_ertekeles}
                        onChange={(e)=>setJatekErtekeles(e.target.value)}
            />
            <input 
                        className="form-control mb-3"
                        type="text"
                        placeholder="Adja meg a játék árát"
                        value={jatek_ar}
                        onChange={(e)=>setJatekAr(e.target.value)}
            />
            <textarea
                        placeholder="Adja meg a játék leírását"
                        className="form-control mb-3"
                        style={{height:200}}
                        value={jatek_leiras}
                        onChange={(e)=>setJatekLeiras(e.target.value)}
                    />
            
            <Lenyilo kivalasztott={setKivalasztott}/>
            <button className="btn btn-primary mb-3" onClick={felvitel}>Felvitel</button>
            <div>{uzenet}</div>
        </div>
    )
}
export default FelvitelJatek

