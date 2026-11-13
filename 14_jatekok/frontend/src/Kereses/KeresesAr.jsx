import { useState,useEffect } from "react"
import Cim from "../Cim"


const KeresesAr=()=>{
    const [ar,setAr]=useState("")

    const [adatok,setAdatok]=useState([])
    const [tolt,setTolt]=useState(false)
    const [hiba,setHiba]=useState(false)
    const [hibaSzoveg,setHibaSzoveg]=useState("")

    const kereses=async ()=>{
        try{
            let bemenet={
                "ar"  : ar
            }
            const response=await fetch(Cim+"/jatekKeresAr",
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
        
    },[])

    return (
        <div style={{textAlign:"left",border:"1px solid black",padding:20 }}>

                <div style={{textAlign:"center"}}>
                <label htmlFor="">Maximum ár:</label>
                <div>
                    <input 
                    onChange={(e)=>setAr(e.target.value)}
                    type="text" 
                    style={{width:300,borderRadius:5,marginBottom:5}}
                    placeholder="Adja meg a játék maximum árát" />
                </div>
                <button onClick={kereses}>Keresés</button>
                </div>

               
            
                { hiba  ?

                <div>{hibaSzoveg}</div>
                
                :              
                adatok.map((elem,index)=>(
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
export default KeresesAr















