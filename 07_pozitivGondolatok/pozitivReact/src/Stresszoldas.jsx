import { useState } from "react"
const Stresszoldas=()=>{
    const [szamocska,setSzamocska]=useState(10)
    return(
        <div className="keretBal">
            <p>Stresszoldás</p>
            <p>Ez a Te nyugi számod: {szamocska}</p>
            <button onClick={()=>setSzamocska(szamocska-1)}>Csökkent</button>
            <button onClick={()=>setSzamocska(szamocska+1)}>Növel</button>
        </div>
    )
}
export default Stresszoldas