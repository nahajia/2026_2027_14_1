import { useState,useEffect } from "react"
import Cim from "../Cim"
import leKep from "../assets/down.jpg"
import felKep from "../assets/up.jpg"

const BejegyzesLista=({frissit})=>{
    const [adatok,setAdatok]=useState([])
    const [rendez,setRendez]=useState(0)

    const letoltes=async ()=>{
        try{
            let response;
            if (rendez==0)
                response=await fetch(Cim+"bejegyzes")
            else if (rendez==1)
                response=await fetch(Cim+"bejegyzesCsokkeno")
            const data=await response.json()
            //alert(JSON.stringify(data))
            if (response.ok){
                setAdatok(data)
            }
        }
        catch (error){
            console.log(error)
        }
    }

    useEffect(()=>{
        letoltes()
    },[rendez,frissit])

    return (
        <div>
            <h2>Tenisszel kapcsolatos bejegyzések</h2>
            <button onClick={()=>setRendez(0)}><img style={{width:"20px"}} src={leKep} alt="" /></button>
            <button onClick={()=>setRendez(1)}><img style={{width:"20px"}} src={felKep} alt="" /></button>
            <div>
                {adatok.map((elem,index)=>(
                    <div key={index} className="doboz" style={{textAlign:"left"}}>
                        <div style={{float:"left"}}>{index+1}.</div>
                        <div style={{textAlign:"right"}}>{elem.jatekos_nev}</div>
                        <div className="szoveg">{elem.bejegyzes_szoveg}</div>
                        <div className="datum">{elem.bejegyzes_datum.split('T')[0]}</div>
                        <div className="ki">{elem.bejegyzes_ki}</div>
                    </div>

                ))

                }
            </div>
        </div>
    )
}
export default BejegyzesLista

