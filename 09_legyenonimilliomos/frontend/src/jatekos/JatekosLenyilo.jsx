import { useState,useEffect } from "react"
const JatekosLenyilo=()=>{
    const [adatok,setAdatok]=useState([])

    const letoltes=async ()=>{
        let response=await fetch("http://localhost:3000/jatekos")
        let data=await response.json()
        //alert(JSON.stringify(data))
        setAdatok(data)
    }

    useEffect(()=>{
        letoltes()
    },[])

    return (
        <div className="keret">
            <p>Játékosok:</p>
            <select>
            {
                adatok.map((elem)=>(
                    <option key={elem.jatekos_id}>{elem.jatekos_felhnev}</option>
                ))
            }
            </select>
        </div>
    )
}
export default JatekosLenyilo

