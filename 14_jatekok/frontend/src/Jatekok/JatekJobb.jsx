import { useState,useEffect } from "react"
import Cim from "../Cim"


const JatekJobb=({kivalasztott})=>{
    const [adatok,setAdatok]=useState([])
    const [tolt,setTolt]=useState(true)
    const [hiba,setHiba]=useState(false)
    const [hibaSzoveg,setHibaSzoveg]=useState("")

    const leToltes=async ()=>{
        try{
            let bemenet={
                "szam"  : kivalasztott
            }
            const response=await fetch(Cim+"/platformSzur",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(bemenet)
                }
            )
            const data=await response.json()
            //alert(JSON.stringify(data))
            //console.log(data)
            if (response.status===200)
                {
                    setAdatok(data)
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
    
    else return (
        <div style={{textAlign:"left",border:"1px solid black",padding:20 }}>
            
                {adatok.map((elem,index)=>(
                    <div key={index} className="jatekDoboz" > 
                        <div style={{textAlign:'center'}}>{elem.jatek_nev}</div>
                        <div style={{textAlign:'center'}}>
                            <img className="kep" src={Cim+"/kepek/"+elem.jatek_kep} alt="" />
                           
                        </div>
                        <div style={{textAlign:'justify'}}>{elem.jatek_leiras}</div>
                        <div className="kek">
                            <div >Kiadás éve: {elem.jatek_ev}</div>
                            <div >Értékelés: {elem.jatek_ertekeles}</div>
                            <div >Ár: {elem.jatek_ar}</div>
                        </div>
                    </div>
                ))}
           
        </div>
    )
}
export default JatekJobb








