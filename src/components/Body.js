import datas from '../db/data.json'
export default function Body(){
    let lst = [
        {
            img : datas.linearTravle.seoul,
            place : '서울특별시',
            desc : '차로 15분 거리'
        },
        {
            img : datas.linearTravle.yangyang,
            place : '양양군',
            desc : '차로 25분 거리'
        },
        {
            img : datas.linearTravle.jeju,
            place : '제주시',
            desc : '차로 7시간 거리'
        },
        {
            img : datas.linearTravle.busan,
            place : '부산',
            desc : '차로 5시간 거리'
        },
        {
            img : datas.linearTravle.sockcho,
            place : '속초시',
            desc : '차로 2.5시간 거리'
        },
        {
            img : datas.linearTravle.daegu,
            place : '대구광역시',
            desc : '차로 4시간 거리'
        },
    ]
    return(
        <div className="body">
            <h1 className="text-xl">가까운 여행지</h1>
            <div className="inline-flex">
            {lst.map((data) => (
                <card className="">
                    <img className="w-1/2 rounded-lg" src={data.img}></img>
                    <h1>{data.place}</h1>
                    <p>{data.desc}</p>
                </card>
                ))}
            </div>
            
        </div>
    )
}