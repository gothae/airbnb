/* eslint-disable no-undef */
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import HouseList from "./HouseList";
export default function Maps() {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  const [btn,setBtn] = useState(['취소 수수료 없음','숙소 유형','요금','즉시 예약','필터 추가하기'])


  return (
    <div>
        <div className="homeList ml-6 mt-20 w-4/12">
            <p>300개 이상의 숙소</p>
            <h1 className="text-3xl font-bold">지도에서 선택한 지역의 숙소</h1>
            <div className="btn-lst">
                {btn.map((item,idx) => (
                    <button className="mt-5 self_btn" type="button" key={idx} value={item}>{item}</button>
                ))}
            </div>
            <p className="hint-text mt-5">여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다.</p>
            <p className="mt-5">예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요. <Link className="underline" to="/">자세히 알아보기</Link></p>
            <HouseList/>
        </div>
      <div id="map" className="mapStyle"></div>
    </div>
  );
}
