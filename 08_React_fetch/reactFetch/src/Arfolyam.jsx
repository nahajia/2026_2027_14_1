import { useState,useEffect } from "react"
const Arfolyam=()=>{
    const [adatok,setAdatok]=useState("")

    const leTolt=async ()=>{
        //alert("hello")
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/EUR")
        let data=await response.json()
        //alert(JSON.stringify(data))
        setAdatok(data.rates["HUF"])
        
    }

    useEffect(()=>{
        leTolt()
    },[])


    return (
        <div>
            <p>Az Euró árfolyama: {adatok} Ft</p>
        </div>
    )
}
export default Arfolyam

