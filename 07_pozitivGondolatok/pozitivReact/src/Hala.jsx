import { useState } from "react"
const halaTomb=["egészség","család","barátok","anyagi biztonság","van munkám","tiszta környezet"]
const Hala=()=>{
    const [szoveg,setSzoveg]=useState("")
    const [szoveg2,setSzoveg2]=useState("")
    const [szam,setSzam]=useState("")

    function valtoztat(e){
        setSzoveg(e.target.value)
    }
    return(
        <div className="keretBal">
            <span>Írd be miért vagy hálás:</span>
            <input type="text" onChange={valtoztat} />
            <p>Amiért hálás vagy: {szoveg}</p>

            <span>Miért vagy még hálás:</span>
            <input type="text" onChange={(e)=>setSzoveg2(e.target.value)} />
            <p>Amiért még hálás vagy: {szoveg2}</p>

            <span>Írj be egy számot:</span>
            <input type="text" onChange={(e)=>setSzam(e.target.value)} />
            { szam<halaTomb.length   ?
                    <p>A szám szerint kiválasztott elem: {halaTomb[szam]}</p>
                    :
                    <p>Nem találtam hozzá tartozó elemet, tippelj még!!!</p>
                    }
            

        </div>
    )
}
export default Hala

