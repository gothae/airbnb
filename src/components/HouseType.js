import { func } from 'prop-types'
import datas from '../db/data.json'
export default function HouseType(){
    let houseType = [
        {
            id:1,
            img:datas.type.nature,
            desc:'자연생활을 만끽할 수 있는 숙소',
        },
        {
            id:2,
            img:datas.type.unordinary,
            desc:'독특한 공간',
        },
        {
            id:3,
            img:datas.type.house,
            desc:'집 전체',
        },
        {
            id:4,
            img:datas.type.pet,
            desc:'반려동물 동반 가능',
        }
    ]
    return(
        <div className="body w-11/12 mx-auto mt-20">
            <h1 className="text-3xl font-bold">어디에서나, 여행은 살아보는 거야!</h1>
            <div className="relative grid grid-cols-4 gap-3 mt-6">
            {houseType.map((home) => (
                <cards onClick={function(){
                    alert('hello')
                }} key={home.is}>
                    <button type="button"><img className="rounded-lg" src={home.img}/>
                    <p className="text-left text-lg font-bold">{home.desc}</p>
                    </button>
                    
                </cards>
            ))}
            </div>
        </div>
    )

}