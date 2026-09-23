import { useState } from "react"
import SportJobbOldal from "./SportJobbOldal"

const Sport=()=>{
    const [bemenetBal,setBemenetBal]=useState("")
    const [nemSzeret,setNemSzeret]=useState("")

    
    return (
        <div className="keretBal">
            <p>Sportolj!!!</p>
            <div className="ketOszlop">
                    <div className="oszlop">
                        <p>Kedvenc sportjaink:</p>
                        <ul>
                            <li>foci</li>
                            <li>sakk</li>
                            <li>kosárlabda</li>
                        </ul>
                        <p>Add meg a kedvenc sportod:</p>
                        <input type="text" 
                            onChange={(e)=>setBemenetBal(e.target.value)} />
                        <p>Ezt a sportot utálod (jobbról lett átküldve): {nemSzeret}</p>

                        
                    </div>
                    <div className="oszlop">
                        <SportJobbOldal bemenetBal={bemenetBal} vissza={setNemSzeret} />
                    </div>
            </div>
            </div>
    )
}
export default Sport


