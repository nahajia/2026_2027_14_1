import { useState,useEffect } from "react"
const KerdesTorloGomb=({kerdes_id})=>{
    const [siker,setSiker]=useState("")

    const torles=async ()=>{
        try {
             const response=await fetch(`http://localhost:3000/kerdesTorles/${kerdes_id}`,
            {
                    method: "delete",
                    headers: {
                            "Content-Type": "application/json"
                        },
            })
        const data=await response.json()
        //alert(JSON.stringify(data))
        if (response.ok)
            setSiker("siker")
        else 
            console.log("hiba")
        } catch (error) {
            console.log("hiba")
        }
       
    }

    useEffect(()=>{
        
    },[])
    return (
        <div>
            <p>A kérdés id-je: {kerdes_id}</p>
            <button onClick={torles}>Törlés</button>
            {siker}
        </div>
    )
}
export default KerdesTorloGomb