import { useState, useEffect, useRef } from "react";
export default function HouseList() {
  const [hList, sethList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/houses`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        sethList(data);
      });
  }, []);

  const [index, setIndex] = useState(0);
  function totheLeft() {
    setIndex(index-1)
  }
  function totheRight() {
    setIndex(index+1)
  }
  return (
    <div className="hList">
      {hList.map((house) => (
        <div>
          <hr className="mt-5 horizon" />

          <img className="listImg rounded-lg mt-5" src={house.img[`${index}`]}/>

          <div className="btn">
            <button className="left" style={{
                display: index===0?"none":"inline"
            }} onClick={totheLeft}>
                <img src="https://img.icons8.com/material-outlined/48/000000/left-squared.png"/>
            </button>

            <button className="right" style={{
                display:index === 6? "none":"inline"
            }} onClick={totheRight}>
                <img src="https://img.icons8.com/material-outlined/48/000000/right-squared.png"/>
            </button>
          </div>
        
          

          <div className="words mt-4">
            <p>{house.sub}</p>
            <p>{house.title}</p>
            <p>{house.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
