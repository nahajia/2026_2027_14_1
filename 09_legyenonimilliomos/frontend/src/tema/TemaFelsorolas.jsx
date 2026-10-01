import { useState,useEffect } from "react"
const TemaFelsorolas=()=>{
    const [adatok,setAdatok]=useState([])

    const letoltes=async ()=>{
        let response=await fetch("http://localhost:3000/tema")
        let data=await response.json()
        //alert(JSON.stringify(data))
        setAdatok(data)
    }

    useEffect(()=>{
        letoltes()
    },[])

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