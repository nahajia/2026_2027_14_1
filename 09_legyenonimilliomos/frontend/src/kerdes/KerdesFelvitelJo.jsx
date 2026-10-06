import { useState,useEffect } from "react"

import TemaLenyilo from "../tema/TemaLenyilo"

const KerdesFelvitelJo=()=>{

    const [kSzoveg,setkSzoveg]=useState("")
    const [kJo,setkJo]=useState("")
    const [kRossz1,setkRossz1]=useState("")
    const [kRossz2,setkRossz2]=useState("")
    const [kRossz3,setkRossz3]=useState("")
    const [kTemaid,setkTemaid]=useState(1)

    const [hiba,setHiba]=useState(false)
    const [uzenet,setUzenet]=useState("")

    const felvitel=async ()=>{
        alert(kTemaid)
        try {
            let bemenet={
                "kerdes_szoveg":kSzoveg, 
                "kerdes_jo":kJo, 
                "kerdes_rossz1":kRossz1, 
                "kerdes_rossz2":kRossz2, 
                "kerdes_rossz3":kRossz3, 
                "kerdes_temaid":kTemaid
            }
            let response=await fetch("http://localhost:3000/kerdesFelvitel",
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
            <p>Új kérdés felvitele</p>
            <p>Add meg az kérdés szövegét:</p>
            <input style={{width:400}} type="text" onChange={(e)=>setkSzoveg(e.target.value)} />
            <p>Add meg a jó választ:</p>
            <input type="text" onChange={(e)=>setkJo(e.target.value)} />
            <p>Add meg az első rossz választ:</p>
            <input type="text" onChange={(e)=>setkRossz1(e.target.value)} />
            <p>Add meg a második rossz választ:</p>
            <input type="text" onChange={(e)=>setkRossz2(e.target.value)} />
            <p>Add meg a harmadik rossz választ:</p>
            <input type="text" onChange={(e)=>setkRossz3(e.target.value)} />
            <p>Add meg a téma id-ját:</p>
            {/* <input type="text" onChange={(e)=>setkTemaid(e.target.value)} /> */}
            <TemaLenyilo vissza={setkTemaid} />

            <p>
                <button onClick={felvitel}>Kérdés felvitele</button>
            </p>


            
           
            <div>&nbsp; {uzenet} </div>
            
            
        </div>
    )
}
export default KerdesFelvitelJo

