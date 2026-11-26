import { useState,useEffect } from "react"
import Cim from "../Cim"
import Swal from 'sweetalert2'
import LenyiloPlatform from "./LenyiloPlatform"

const ModositBefejez2=({kivalasztott,talalat})=>{
    const [egyJatek,setEgyJatek]=useState(null)
    const [tolt,setTolt]=useState(true)
    const [hiba,setHiba]=useState(false)
    const [hibaSzoveg,setHibaSzoveg]=useState("")

    const [uzenet,setUzenet]=useState("") 
    const [kivalasztottPlat,setkivalasztottPlat]=useState(1) 
    
    
    
    const adatModosit=async (event)=>{
        event.preventDefault()
        //alert("hello")
        const eredmeny = await Swal.fire({
        title: "Biztosan módosítod?",
        text: "A játék adatai módosulni fognak!",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Igen, módosítom",
        cancelButtonText: "Mégsem"
    })

    if (!eredmeny.isConfirmed)
        return
    try{
            if (egyJatek.jatek_nev.trim()===""){
                setUzenet("A játék nevét kötelező megadni")
                return
            }
            if (isNaN(egyJatek.jatek_ar)){
                setUzenet("A játék árához számot adjon meg")
                return
            }
            if (parseFloat(egyJatek.jatek_ar)<0){
                setUzenet("A játék ára pozitív szám lehet")
                return
            }

            const adatok={
                "jatek_nev": egyJatek.jatek_nev,
                "jatek_ev":egyJatek.jatek_ev, 
                "jatek_ertekeles":egyJatek.jatek_ertekeles ,
                "jatek_ar":egyJatek.jatek_ar,
                "jatek_leiras": egyJatek.jatek_leiras, 
                "jatek_kep":egyJatek.jatek_kep,
                "jatek_platform_id":kivalasztottPlat
            }
            const response=await fetch(`${Cim}/jatekModosit/${kivalasztott}`,
                {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(adatok)
            }
            )
            const data=await response.json()
            if (response.ok){
                //alert("sikeres")
                //setUzenet(data["message"])
                Swal.fire({
                                    title: "Sikeres módosítás",
                                    text: "",
                                    icon: "success",
                                    confirmButtonText: "Rendben"
                                })
                talalat(false)
            }
            else{
                setUzenet(data["error"])
                Swal.fire({
                                    title: "Hiba",
                                    text: "",
                                    icon: "error",
                                    confirmButtonText: "Rendben"
                                })
            }
        }
        catch (error){
            console.log(error)
            setUzenet("Hiba")
            Swal.fire({
                                title: "Hiba",
                                text: "",
                                icon: "error",
                                confirmButtonText: "Rendben"
                            })
        }


    }


    const leToltes=async ()=>{
        try{
            
            const response=await fetch(Cim+"/jatek/"+kivalasztott,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    
                }
            )
            const data=await response.json()
            //alert(JSON.stringify(data))
            //console.log(data)
            if (response.status===200)
                {
                    setEgyJatek(data[0])
                    setTolt(false) 
                    setHiba(false)
                }
            else 
                {
                    setHiba(true)
                    setTolt(false)
                    setHibaSzoveg(data["error"])
                }
            }
        catch (error){
            console.log(error)
            setHiba(true)
        }
        
    }

    useEffect(()=>{
        leToltes()
    },[kivalasztott])
    
    
    
    if (tolt)
        return (
            <div style={{textAlign:"center"}}>Adatok betöltése folyamatban...</div>
                )
    else if (hiba)
        return (
            <div>{hibaSzoveg}</div>
                )       
    
    else
    return(
        <div>
            <h2>Adatok módosítása</h2>
            <form action="" onSubmit={adatModosit}>
            <div style={{textAlign:"left"}}>
            <label style={{color:"purple",fontStyle:"italic",fontWeight:"bold",marginLeft:5}}>Játék neve:</label>
             <input 
                        className="form-control mb-3"
                        type="text"
                        placeholder="Adja meg a játék nevét"
                        value={egyJatek.jatek_nev}
                        onChange={(e)=>setEgyJatek({...egyJatek,jatek_nev:e.target.value})}
            />
            <label style={{color:"purple",fontStyle:"italic",fontWeight:"bold",marginLeft:5}}>Játék kiadási éve:</label>
            <input 
                        className="form-control mb-3"
                        type="text"
                        placeholder="Adja meg a játék kiadásának évét"
                        value={egyJatek.jatek_ev}
                        onChange={(e)=>setEgyJatek({...egyJatek,jatek_ev:e.target.value})}
            />
            <label style={{color:"purple",fontStyle:"italic",fontWeight:"bold",marginLeft:5}}>Játék értékelése:</label>
            <input 
                        className="form-control mb-3"
                        type="text"
                        placeholder="Adja meg a játék értékelését"
                        value={egyJatek.jatek_ertekeles}
                        onChange={(e)=>setEgyJatek({...egyJatek,jatek_ertekeles:e.target.value})}
            />
            <label style={{color:"purple",fontStyle:"italic",fontWeight:"bold",marginLeft:5}}>Játék ára:</label>
            <input 
                        className="form-control mb-3"
                        type="text"
                        placeholder="Adja meg a játék árát"
                        value={egyJatek.jatek_ar}
                        onChange={(e)=>setEgyJatek({...egyJatek,jatek_ar:e.target.value})}
            />
            <label style={{color:"purple",fontStyle:"italic",fontWeight:"bold",marginLeft:5}}>Játék leírása:</label>
            <input 
                        className="form-control mb-3"
                        type="text"
                        placeholder="Adja meg a játék leírása"
                        value={egyJatek.jatek_leiras}
                        onChange={(e)=>setEgyJatek({...egyJatek,jatek_leiras:e.target.value})}
            />
             <label style={{color:"purple",fontStyle:"italic",fontWeight:"bold",marginLeft:5}}>Játék képe:</label>
            <input 
                        className="form-control mb-3"
                        type="text"
                        placeholder="Adja meg a játék leírása"
                        value={egyJatek.jatek_kep}
                        onChange={(e)=>setEgyJatek({...egyJatek,jatek_kep:e.target.value})}
            />
             <label style={{color:"purple",fontStyle:"italic",fontWeight:"bold",marginLeft:5}}>Játék platformja:</label>
            <LenyiloPlatform kivalasztottPlat={setkivalasztottPlat}/>
            {/* <input 
                        className="form-control mb-3"
                        type="text"
                        placeholder="Adja meg a játék platf id-ját"
                        value={egyJatek.jatek_platform_id}
                        onChange={(e)=>setEgyJatek({...egyJatek,jatek_platform_id:e.target.value})}
            /> */}
            <input className="btn btn-primary" type="submit" value="Módosítás" />
            </div>
            </form>
        </div>
    )
}
export default ModositBefejez2
