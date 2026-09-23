import { useState,useEffect } from "react"
const StarWars=()=>{
    const [adatok,setAdatok]=useState([])

    const leTolt=async ()=>{
        //alert("hello")
        const response = await fetch("https://raw.githubusercontent.com/WildCodeSchool/starwars-api/refs/heads/master/db.json")
        let data=await response.json()
        //alert(JSON.stringify(data))
        setAdatok(data.characters)
        
    }

    useEffect(()=>{
        leTolt()
    },[])


    return (
        <div>
            <p>Star Wars adatok </p>
            <ul>
                {adatok.map((elem)=>(
                    <li key={elem.id}>
                                {elem.name} 
                                <img style={{width:30}} src={elem.pic} alt="" />
                                </li>
                ))}
            </ul>

        </div>
    )
}
export default StarWars

