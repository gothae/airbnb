import {useState, useEffect} from 'react'
export default function HostingAD() {
  const [image, setImage] = useState()
  useEffect(() => {
    fetch(`http://localhost:3001/hostings`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setImage(data)
    })
  },[])
  
  return (
    <div className="relative ad w-11/12 mx-auto mt-20 mb-10">
      <img
        className="object-cover w-full h-88 rounded-lg"
        src={image}
        title="hello"
      />
      <p className="absolute top-44 left-20 text-5xl font-bold text-white">
        호스팅 시작하기
      </p>
      <p className="absolute top-60 left-20 text-xl text-white">
        숙소를 공유하여 부수입을 올리고
        <br />
        새로운 가능성을 만나세요.
      </p>
      <p className="absolute bottom-36 left-20 border py-3 px-8 rounded-lg bg-white font-bold text-black">자세히 알아보기</p>
    </div>
  );
}
