import { useState,useEffect } from "react"
export default function LinearTravel(){
    let [lst,setLst] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/linearTravle`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setLst(data)
        })
    },[])

    return(
        <div className="body w-11/12 mx-auto mt-3">
            <h1 className="text-3xl font-bold">가까운 여행지 둘러보기</h1>
            <div className="relative grid grid-cols-4 gap-4 mt-6">
            {lst.map((data) => (
                <div className="card" key={data.id}>
                    <button type="button" className="w-1/5 float-left mr-3"><img className="rounded-lg" src={data.img}/></button>
                    <p className="mt-2 font-bold">{data.place}</p>
                    <p className="">{data.desc}</p>
                    
                </div>
                ))}
            </div>
        </div>
    )
}