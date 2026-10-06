import { useState,useEffect } from "react"

const KerdesLenyilo=()=>{
    const [adatok,setAdatok]=useState([])

    const letoltes=async ()=>{
        let response=await fetch("http://localhost:3000/kerdes")
        let data=await response.json()
        //alert(JSON.stringify(data))
        setAdatok(data)
    }

    useEffect(()=>{
        letoltes()
    },[])

    return (
        <div >
           
            <select>
            {
                adatok.map((elem)=>(
                    <option key={elem.kerdes_id} 
                            value={elem.kerdes_id}>
                            {elem.kerdes_szoveg} ({elem.kerdes_id})
                    </option>
                ))
            }
            </select>
        </div>
    )
}
export default KerdesLenyilo

