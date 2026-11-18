import { useState,useEffect } from "react"
import Cim from "../Cim"
import Swal from 'sweetalert2'

const TorlesJatek=()=>{
    const [adatok,setAdatok]=useState([])
    const [tolt,setTolt]=useState(true)
    const [hiba,setHiba]=useState(false)

    const [uzenet,setUzenet]=useState("") 

    const [frissit,setFrissit]=useState(false)

    const torles=async (jatek_id)=>{
        //alert(jatek_id)
        const biztos=window.confirm("Biztosan törölni szeretnél?")
        if (!biztos)
            return
        try{
            const response=await fetch(Cim+"/jatekTorles/"+jatek_id,
                {
                method: "delete",
                headers: {
                    "Content-Type": "application/json"
                },
                
            }
            )
            const data=await response.json()
            if (response.ok){
                //alert("sikeres")
                setUzenet(data["message"])
                //alert(data["message"])
                setFrissit(!frissit)
                Swal.fire({
                    title: "Sikeres törlés",
                    text: "",
                    icon: "success",
                    confirmButtonText: "Rendben"
                })

            }
            else{
                setUzenet(data["error"])
                //alert(data["error"])
                Swal.fire({
                    title: "Hiba",
                    text: "",
                    icon: "danger",
                    confirmButtonText: "Rendben"
                })
            }
        }
        catch (error){
            setUzenet("Hiba")
            //alert("Hiba")
            Swal.fire({
                    title: "Hiba",
                    text: "",
                    icon: "danger",
                    confirmButtonText: "Rendben"
                })
        }
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
    },[frissit])

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