
const OlvassReszletek=({sorSzam, cim, iro, hossz, ev})=>{
    return (
        <div>
            <p>A könyv részletes adatai:</p>
            {/* <p>{sorSzam}</p> */}
            <p>A könyv címe: {cim}</p>
            <p>A könyv írója: {iro}</p>
            <p>A könyv hossza: {hossz}</p>
            <p>A könyv kiadási éve: {ev}</p>
        </div>
    )
}
export default OlvassReszletek