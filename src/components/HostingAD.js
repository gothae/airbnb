import datas from '../db/data.json'
export default function HostingAD(){
    return(
        <div className="ad w-11/12 mx-auto mt-20">
            <img className="object-cover w-full h-88 rounded-lg" src={datas.hosting}></img>
        </div>
    )

}