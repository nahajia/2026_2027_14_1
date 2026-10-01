import { useState,useEffect } from "react"
const KeresKerdes=()=>{
    const [adatok,setAdatok]=useState([])
    const [szo,setSzo]=useState("")
    const [hiba,setHiba]=useState(false)

    const keres=async ()=>{
        try {
            let bemenet={
            "szo":szo
            }
            let response=await fetch("http://localhost:3000/keresKerdes",
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
                setAdatok(data)
                setHiba(false)
            }
            else 
                setHiba(true)
            } catch (error) {
                setHiba(true)
        }
        
    }

    useEffect(()=>{
        
    },[])

    return (
        <div className="keret">
            <p>Keresés a kérdés szövegében</p>
            <p>Add meg a keresendő szót:</p>
            <input type="text" onChange={(e)=>setSzo(e.target.value)} />
            <button onClick={keres}>Keresés</button>
            { hiba  
                ? 
                <div>Hiba történt</div>
                :  
                <ul>
                {
                    adatok.map((elem)=>(
                        <li key={elem.kerdes_id}>{elem.kerdes_szoveg}</li>
                    ))
                }
                </ul>
            }
            
        </div>
    )
}
export default KeresKerdes

