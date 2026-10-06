import { useState,useEffect } from "react"
const KerdesTalalat=({kerdes_id})=>{
    const [egyKerdes,setEgyKerdes]=useState({})

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
    return (
        <div>
            <p>A kérdés id-je: {kerdes_id}</p>
            <p>Kérdés szövege: <span style={{color:"blue"}}> {egyKerdes.kerdes_szoveg}</span></p>
            <p>Jó válasz: <span style={{color:"blue"}}> {egyKerdes.kerdes_jo}</span></p>
            <p>1. rossz válasz: <span style={{color:"blue"}}> {egyKerdes.kerdes_rossz1}</span></p>
            <p>2. rossz válasz: <span style={{color:"blue"}}> {egyKerdes.kerdes_rossz2}</span></p>
            <p>3. rossz válasz: <span style={{color:"blue"}}> {egyKerdes.kerdes_rossz3}</span></p>
            <p>Kérdés témája: <span style={{color:"blue"}}> {egyKerdes.kerdes_temaid}</span></p>
            
        </div>
    )
}
export default KerdesTalalat