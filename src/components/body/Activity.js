import { useState,useEffect } from "react";
export default function Activity(){

    let [activeType,setActiveType] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/activity`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setActiveType(data)
        })
    }, []);

    return(
        <div className="body w-11/12 mx-auto mt-20">
            <h1 className="text-3xl font-bold">어디에서나, 여행은 살아보는 거야!</h1>
            <div className="relative grid grid-cols-3 gap-5 mt-6">
            {activeType.map((active) => (
                <div className="card" onClick={function(){
                    alert('hello')
                }} key={active.id}>
                    <button type="button"><img className="rounded-lg" src={active.img}/>
                    <p className="text-left text-lg font-bold">{active.title}</p>
                    <p className="text-left text-xm">{active.desc}</p>
                    </button>
                    
                </div>
            ))}
            </div>
        </div>
    )
}