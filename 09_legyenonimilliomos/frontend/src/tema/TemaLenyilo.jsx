import { useState,useEffect } from "react"
const TemaLenyilo=({vissza})=>{
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
        <div>
            <select onChange={(e)=>vissza(e.target.value)}>
            {
                adatok.map((elem)=>(
                    <option key={elem.tema_id} value={elem.tema_id}>{elem.tema_nev}</option>
                ))
            }
            </select>
        </div>
    )
}
export default TemaLenyilo

