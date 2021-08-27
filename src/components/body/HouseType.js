import { useState, useEffect } from 'react'
export default function HouseType(){

    let [houseType, setHouseType] = useState([])
    useEffect(()=> {
        fetch(`http://localhost:3001/type`)
        .then(
            (res)=>{
                return res.json()
            }
        )
        .then(
            (data)=>{
                setHouseType(data)
            }
        )
    },[])
    
    return(
        <div className="body w-11/12 mx-auto mt-20">
            <h1 className="text-3xl font-bold">어디에서나, 여행은 살아보는 거야!</h1>
            <div className="relative grid grid-cols-4 gap-3 mt-6">
            {houseType.map((home) => (
                <div className="card" onClick={function(){
                    alert(`${home.desc}`)
                }} key={home.id}>
                    <button type="button"><img className="rounded-lg" src={home.img}/>
                    <p className="text-left text-lg font-bold">{home.desc}</p>
                    </button>
                    
                </div>
            ))}
            </div>
        </div>
    )

}