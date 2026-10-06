import { useState,useEffect } from "react"
const KerdesTalalat=({kerdes_id})=>{
    const [egyKerdes,setEgyKerdes]=useState([])

    const letoltes=async ()=>{
        const response=await fetch(`http://localhost:3000/kerdes/${kerdes_id}`,
            {
                    method: "POST",
                    headers: {
                            "Content-Type": "application/json"
                        },
            })
        const data=await response.json()
        //alert(JSON.stringify(data))
        setEgyKerdes(data[0])
    }

    useEffect(()=>{
        letoltes()
    },[kerdes_id])
    return (
        <div>
            <p>A kérdés id-je: {kerdes_id}</p>
            <p>{egyKerdes.kerdes_szoveg}</p>
        </div>
    )
}
export default KerdesTalalat