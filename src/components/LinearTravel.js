import datas from '../db/data.json'
export default function LinearTravel(){
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
        {
            img : datas.linearTravle.wanju,
            place : '완주',
            desc : '차로 3시간 거리'
        },
        {
            img : datas.linearTravle.junju,
            place : '전주',
            desc : '차로 3시간 거리'
        },
    ]
    return(
        <div className="body w-11/12 mx-auto">
            <h1 className="text-3xl font-bold">가까운 여행지 둘러보기</h1>
            <div className="relative grid grid-cols-4 gap-4 mt-6">
            {lst.map((data) => (
                <card className="">
                    <button type="button" className="w-1/5 float-left mr-3"><img className="rounded-lg" src={data.img}/></button>
                    <p className="mt-2 font-bold">{data.place}</p>
                    <p className="">{data.desc}</p>
                    
                </card>
                ))}
            </div>
            <br/><br/><br/>
        </div>
    )
}