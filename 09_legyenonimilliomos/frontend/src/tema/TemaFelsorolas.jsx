import { useState,useEffect } from "react"
import Toltes from "../toltes.gif"
const TemaFelsorolas=()=>{
    const [adatok,setAdatok]=useState([])
    const [tolt,setTolt]=useState(true)
    const [hiba,setHiba]=useState(false)

    const letoltes=async ()=>{
        try {
            let response=await fetch("http://localhost:3000/tema")
            let data=await response.json()
            //alert(JSON.stringify(data))
            setAdatok(data)
            setTolt(false)
        } catch (error) {
            setTolt(false)
            setHiba(true)
        }
        
    }

    useEffect(()=>{
        letoltes()
    },[])

    if (tolt){
        return (
            <div>
                <p>Töltés</p>
                <img src={Toltes} alt="" />
            </div>
        )
    }
    else if (hiba){
        return (
            <div>
                <p>Hiba történt</p>
            </div>
        )
    }
    else
    return (
        <div className="keret">
            <p>Témák:</p>
            <ul>
            {
                adatok.map((elem)=>(
                    <li key={elem.tema_id}>{elem.tema_nev}</li>
                ))
            }
            </ul>
        </div>
    )
}
export default TemaFelsorolas