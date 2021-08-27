import React from "react";
import HouseType from "../components/body/HouseType";
import Header from "../components/header/index";
import LinearTravel from "../components/body/LinearTravel";
import HostingAD from "../components/body/HostingAD";
import Activity from "../components/body/Activity";
export default function Main(){
    return(
        <div className="container mx-auto bg-gray-background ">
            <Header/>
            <LinearTravel/>
            <HouseType/>
            <HostingAD/>
            <Activity/>
        </div>
    );
}