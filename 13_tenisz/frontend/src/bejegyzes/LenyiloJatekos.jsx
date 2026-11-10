import { useState,useEffect } from "react"
import Cim from "../Cim"


const LenyiloJatekos=({kivalasztott})=>{
    const [adatok,setAdatok]=useState([])


    const letoltes=async ()=>{
        try{
            
            const response=await fetch(Cim+"jatekos")
            const data=await response.json()
            //alert(JSON.stringify(data))
            if (response.ok){
                setAdatok(data)
            }
        }
        catch (error){
            console.log(error)
        }
    }

    useEffect(()=>{
        letoltes()
    },[])

    return (
        <div>
            <select onChange={(e)=>kivalasztott(e.target.value)}>
                {adatok.map((elem,index)=>(
                       <option key={index} value={elem.jatekos_id} >
                            {elem.jatekos_nev}
                            </option>
                ))

                }
            </select>
        </div>
    )
}
export default LenyiloJatekos

