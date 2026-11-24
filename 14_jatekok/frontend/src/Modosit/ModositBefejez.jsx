import { useState,useEffect } from "react"
import Cim from "../Cim"

const ModositBefejez=({kivalasztott})=>{
    const [egyJatek,setEgyJatek]=useState(null)
    const [tolt,setTolt]=useState(true)
    const [hiba,setHiba]=useState(false)
    const [hibaSzoveg,setHibaSzoveg]=useState("")
    
    const leToltes=async ()=>{
        try{
            
            const response=await fetch(Cim+"/jatek/"+kivalasztott,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    
                }
            )
            const data=await response.json()
            //alert(JSON.stringify(data))
            //console.log(data)
            if (response.status===200)
                {
                    setEgyJatek(data[0])
                    setTolt(false) 
                    setHiba(false)
                }
            else 
                {
                    setHiba(true)
                    setTolt(false)
                    setHibaSzoveg(data["error"])
                }
            }
        catch (error){
            console.log(error)
            setHiba(true)
        }
        
    }

    useEffect(()=>{
        leToltes()
    },[kivalasztott])
    
    
    
    if (tolt)
        return (
            <div style={{textAlign:"center"}}>Adatok betöltése folyamatban...</div>
                )
    else if (hiba)
        return (
            <div>{hibaSzoveg}</div>
                )       
    
    else
    return(
        <div>
            <h2>Adatok módosítása</h2>
             <input 
                        className="form-control mb-3"
                        type="text"
                        placeholder="Adja meg a játék nevét"
                        value={egyJatek.jatek_nev}
                        onChange={(e)=>setEgyJatek({...egyJatek,jatek_nev:e.target.value})}
            />
        </div>
    )
}
export default ModositBefejez
