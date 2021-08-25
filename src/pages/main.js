import React from "react";
import HouseType from "../components/HouseType";
import Header from "../components/header";
import LinearTravel from "../components/LinearTravel";
import HostingAD from "../components/HostingAD";
export default function Main(){
    return(
        <div className="container mx-auto bg-gray-background ">
            <Header/>
            <LinearTravel/>
            <HouseType/>
            <HostingAD/>
        </div>
    );
}