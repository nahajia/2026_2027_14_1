import { useState,useEffect } from "react"
import TemaLenyiloSzerkeszt from "../tema/TemaLenyiloSzerkesz"
const KerdesSzerkeszt=({kerdes_id})=>{
    const [egyKerdes,setEgyKerdes]=useState({})
    const [visszaTema,setVisszaTema]=useState(1)

    const [hiba,setHiba]=useState(false)
    const [uzenet,setUzenet]=useState("")

    const letoltes=async ()=>{
        try {
             const response=await fetch(`http://localhost:3000/kerdes/${kerdes_id}`,
            {
                    method: "POST",
                    headers: {
                            "Content-Type": "application/json"
                        },
            })
        const data=await response.json()
        //alert(JSON.stringify(data))
        if (response.ok)
            setEgyKerdes(data[0])
        else 
            console.log("hiba")
        } catch (error) {
            console.log("hiba")
        }
       
    }

    useEffect(()=>{
        letoltes()
    },[kerdes_id])

    const modositFuggveny=async ()=>{
        //alert("haliho")
        try {
            let bemenet={
                "kerdes_szoveg":egyKerdes.kerdes_szoveg, 
                "kerdes_jo":egyKerdes.kerdes_jo, 
                "kerdes_rossz1":egyKerdes.kerdes_rossz1, 
                "kerdes_rossz2":egyKerdes.kerdes_rossz2, 
                "kerdes_rossz3":egyKerdes.kerdes_rossz3, 
                "kerdes_temaid":visszaTema
            }
            let response=await fetch(`http://localhost:3000/kerdesModosit/${kerdes_id}`,
                {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(bemenet)
                }
            )
            let data=await response.json()
            //alert(JSON.stringify(data))
            if (response.ok){
                setUzenet(data["message"])
                setHiba(false)
            }
            else{ 
                setUzenet(data["error"])
                setHiba(true)
            }
            } catch (error) {
                setUzenet("Hiba történt")
                setHiba(true)
        }
    }

    return (
        <div>
            <p>A kérdés id-je: {kerdes_id}</p>
            
            <p>Kérdés szövege:</p>
            <input 
                style={{width:400}}
                type="text" 
                value={egyKerdes.kerdes_szoveg}
                onChange={(e)=>setEgyKerdes({...egyKerdes, kerdes_szoveg:e.target.value})} 
            />
           
            <p>Jó válasz: </p>
            <input 
                style={{width:400}}
                type="text" 
                value={egyKerdes.kerdes_jo}
                onChange={(e)=>setEgyKerdes({...egyKerdes, kerdes_jo:e.target.value})} 
            />

            <p>1. rossz válasz: </p>
            <input 
                style={{width:400}}
                type="text" 
                value={egyKerdes.kerdes_rossz1}
                onChange={(e)=>setEgyKerdes({...egyKerdes, kerdes_rossz1:e.target.value})} 
            />


            <p>2. rossz válasz:</p>
            <input 
                style={{width:400}}
                type="text" 
                value={egyKerdes.kerdes_rossz2}
                onChange={(e)=>setEgyKerdes({...egyKerdes, kerdes_rossz2:e.target.value})} 
            />
            <p>3. rossz válasz: </p>
            <input 
                style={{width:400}}
                type="text" 
                value={egyKerdes.kerdes_rossz3}
                onChange={(e)=>setEgyKerdes({...egyKerdes, kerdes_rossz3:e.target.value})} 
            />
            <TemaLenyiloSzerkeszt szam={egyKerdes.kerdes_temaid}  vissza={setVisszaTema}/>

            <button onClick={modositFuggveny}>Módosítás</button>
            { hiba ? <p style={{color:"red"}}>{uzenet}</p> :  <p style={{color:"blue"}}> {uzenet}</p>}
           
        </div>
    )
}
export default KerdesSzerkeszt