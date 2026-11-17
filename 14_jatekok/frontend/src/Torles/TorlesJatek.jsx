import { useState,useEffect } from "react"
import Cim from "../Cim"

const TorlesJatek=()=>{
    const [adatok,setAdatok]=useState([])
    const [tolt,setTolt]=useState(true)
    const [hiba,setHiba]=useState(false)

    const torles=(jatek_id)=>{
        alert(jatek_id)
    }

    const leToltes=async ()=>{
        try{
            const response=await fetch(Cim+"/jatek")
            const data=await response.json()
            //alert(JSON.stringify(data))
            //console.log(data)
            if (response.ok)
                {
                    setAdatok(data)
                    setTolt(false)}
            else 
                {
                    setHiba(true)
                    setTolt(false)
                }
            }
        catch (error){
            console.log(error)
            setHiba(true)
        }
        
    }

    useEffect(()=>{
        leToltes()
    },[])

    if (tolt)
        return (
            <div style={{textAlign:"center"}}>Adatok betöltése folyamatban...</div>
                )
    else if (hiba)
        return (
            <div>Hiba</div>
                )       
    
    else return (
        <div style={{marginBottom:20}}>
            <table className="table table-striped">
                {adatok.map((elem,index)=>(
                    <tr key={index} > 
                        <td>{index+1}.</td>
                        <td>{elem.jatek_nev} </td>
                        <td>
                            <button 
                                className="btn btn-danger" 
                                onClick={()=>torles(elem.jatek_id)}>
                                    X
                            </button>
                        </td>
                        
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default TorlesJatek