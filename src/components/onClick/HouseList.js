import {useState, useEffect} from 'react'
export default function HouseList(){
    const [hList,sethList] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/houses`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            sethList(data)
        })
    }, []);
    return(
        <div className="hList">
            {hList.map(house=>(
                <div>
                    <hr className="mt-5 horizon"/>
                    <div className="picList">
                        <div className="inner">
                            <img className="listImg rounded-lg mt-5" src={house.img[0]}></img>
                        </div>
                        <div className="inner">
                            <img className="listImg rounded-lg mt-5" src={house.img[1]}></img>
                        </div>
                        <div className="inner">
                            <img className="listImg rounded-lg mt-5" src={house.img[2]}></img>
                        </div>
                        <div className="inner">
                            <img className="listImg rounded-lg mt-5" src={house.img[3]}></img>
                        </div>
                        <div className="inner">
                            <img className="listImg rounded-lg mt-5" src={house.img[4]}></img>
                        </div>
                        <div className="inner">
                            <img className="listImg rounded-lg mt-5" src={house.img[5]}></img>
                        </div>
                        <div className="inner">
                            <img className="listImg rounded-lg mt-5" src={house.img[6]}></img>
                        </div>
                        
                    </div>
                    
                    <div className="words mt-4">
                        <p>{house.sub}</p>
                        <p>{house.title}</p>
                        <p>{house.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}