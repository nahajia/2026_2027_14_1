import { useState } from "react"
import Lenyilo from "./Lenyilo"
import JatekJobb from "./JatekJobb"
const Jatekok=()=>{
    const [kivalasztott,setKivalasztott]=useState(1)

    return (
        <div>
            <h2>Játékok</h2>
            <div className="row">
                <div className="col-lg-4">
                    <Lenyilo kivalasztott={setKivalasztott}/>
                    </div>
                <div className="col-lg-8">
                    <JatekJobb kivalasztott={kivalasztott} />
                </div>
            </div>
        </div>
    )
}
export default Jatekok

