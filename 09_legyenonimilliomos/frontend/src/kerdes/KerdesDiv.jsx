import { useState,useEffect } from "react"
const KerdesDiv=()=>{
    const [adatok,setAdatok]=useState([])

    const letoltes=async ()=>{
        let response=await fetch("http://localhost:3000/kerdesTema")
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
            <div>
            {
                adatok.map((elem)=>(
                    <div key={elem.kerdes_id}>{elem.kerdes_szoveg}-{elem.tema_nev}</div>
                ))
            }
            </div>
        </div>
    )
}
export default KerdesDiv