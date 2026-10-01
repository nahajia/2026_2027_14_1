import { useState,useEffect } from "react"

const Fordito=()=>{
    const [adatok,setAdatok]=useState("")
    const [bemenet,setBemenet]=useState("translate this sentence")

    const letoltes=async ()=>{
        let response=await fetch(`https://api.mymemory.translated.net/get?q=${bemenet}&langpair=en|hu`)
        let data=await response.json()
        //alert(JSON.stringify(data))
        setAdatok(data.responseData.translatedText)
    }

    useEffect(()=>{
        letoltes()
    },[])


    return (
        <div>
            <p>Fordító</p>
            <p>Írj be egy szöveget és lefordítom:</p>
            <input type="text" onChange={(e)=>setBemenet(e.target.value.toLowerCase())} />
            <p>A lefordítandó szöveg: {bemenet}</p>
            <button onClick={letoltes}>Fordítás</button>
            <p>Lefordítva: {adatok}</p>
        </div>
    )
}
export default Fordito





