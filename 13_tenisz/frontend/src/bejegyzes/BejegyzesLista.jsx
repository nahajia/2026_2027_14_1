import { useState,useEffect } from "react"
import Cim from "../Cim"

const BejegyzesLista=()=>{
    const [adatok,setAdatok]=useState([])

    const letoltes=async ()=>{
        const response=await fetch(Cim+"bejegyzes")
        const data=await response.json()
        alert(JSON.stringify(data))
    }

    useEffect(()=>{
        letoltes()
    },[])

    return (
        <div>
            <h2>Tenisszel kapcsolatos bejegyzések</h2>
        </div>
    )
}
export default BejegyzesLista

