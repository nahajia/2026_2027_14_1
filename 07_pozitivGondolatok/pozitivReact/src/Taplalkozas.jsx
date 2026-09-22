const etelTomb=[
    {
        "nev":"tökfőzelék",
        "ido":20
    },
    {
        "nev":"borsófőzelék",
        "ido":20
    },
    {
        "nev":"saláta",
        "ido":8
    },
    {
        "nev":"rakott karfiol",
        "ido":100
    },
    {
        "nev":"főtt tojás",
        "ido":5
    },    
]

const Taplalkozas=()=>{
    return(
        <div className="keretBal">
            <p>Táplálkozz egészségesen!</p>
            <p>Egyél ilyen ételeket:</p>
            <ul>
                {etelTomb.map(elem=>(
                    <li>{elem.nev}</li>
                ))}
            </ul>
            <p>Rövid idő alatt elkészíthető ételek:</p>
            <ul>
                {etelTomb.map(elem=>(
                    elem.ido<10  ?  
                        <li>{elem.nev} elkészitési idő: {elem.ido}perc </li>
                        : 
                        null
                ))}
            </ul>
        </div>
    )
}
export default Taplalkozas



