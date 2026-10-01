import { useState,useEffect } from "react"
const TemaFelvitel=()=>{

    const [szo,setSzo]=useState("")
    const [hiba,setHiba]=useState(false)
    const [uzenet,setUzenet]=useState("")

    const felvitel=async ()=>{
        try {
            let bemenet={
            "tema_nev":szo
            }
            let response=await fetch("http://localhost:3000/temaFelvitel",
                {
                        method: "POST",
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

    useEffect(()=>{
        
    },[])

    return (
        <div className="keret">
            <p>Új téma felvitele</p>
            <p>Add meg az új téma nevét:</p>
            <input type="text" onChange={(e)=>setSzo(e.target.value)} />
            <button onClick={felvitel}>Felvitel</button>
           
            <div>&nbsp; {uzenet} </div>
            
            
        </div>
    )
}
export default TemaFelvitel

