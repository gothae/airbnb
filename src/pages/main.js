import React from "react";
import HouseType from "../components/HouseType";
import Header from "../components/header/index";
import LinearTravel from "../components/LinearTravel";

export default function Main(){
    return(
        <div className="container mx-auto bg-gray-background ">
            <Header/>
            <LinearTravel/>
            <HouseType/>
        </div>
    );
}