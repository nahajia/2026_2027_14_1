import { useState } from "react"
import OlvassReszletek from "./OlvassReszletek"
const konyvTomb=[
    {
        "cim":"Harry Potter 1.",
        "iro":"Rowling",
        "hossz":350,
        "ev":1997
    },
    {
        "cim":"Harry Potter 2.",
        "iro":"Rowling",
        "hossz":350,
        "ev":1999
    },  
    {
        "cim":"Hail Mary küldetés",
        "iro":"Borsos Lajos",
        "hossz":400,
        "ev":2021
    },  
    {
        "cim":"Gyűrűk ura 1.",
        "iro":"Tolkien",
        "hossz":500,
        "ev":1954
    }
]

const Olvass=()=>{
    const [kivalaszt,setKivalaszt]=useState(0)
    return (
        <div className="keretBal">
            <p>Olvass könyveket!</p>
            <div className="ketOszlop">
                <div className="oszlop">
                    <select name="" id="" 
                        style={{width:200}} 
                        onChange={(e)=>setKivalaszt(e.target.value)}
                        >
                        {konyvTomb.map((elem,index)=>(
                            <option value={index}>{elem.cim}</option>
                        ))}
                    </select>
                </div>
                <div className="oszlop">
                    <OlvassReszletek 
                        sorSzam={kivalaszt} 
                        cim={konyvTomb[kivalaszt].cim} 
                        iro={konyvTomb[kivalaszt].iro} 
                        hossz={konyvTomb[kivalaszt].hossz} 
                        ev={konyvTomb[kivalaszt].ev} />
                </div>
            </div>
        </div>
    )
}
export default Olvass