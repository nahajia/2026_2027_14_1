import KerdesLenyilo from "./KerdesLenyilo"
import KerdesTalalat from "./KerdesTalalat"

const KerdesReszletek=()=>{
    return (
        <div className="keret">
            <p>Egy kérdés részletei</p>
            <div>
                    <KerdesLenyilo />
            </div>
            <div>
                    <KerdesTalalat />
            </div>
            
        </div>
    )
}
export default KerdesReszletek

