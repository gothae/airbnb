import React from "react";
import HouseType from "../components/body/HouseType";
import LoggedInHeader from "../components/header/loggedin_index";
import LinearTravel from "../components/body/LinearTravel";
import HostingAD from "../components/body/HostingAD";
import Activity from "../components/body/Activity";
export default function Loggedin(){
    return(
        <div className="container mx-auto bg-gray-background ">
            <LoggedInHeader/>
            <LinearTravel/>
            <HouseType/>
            <HostingAD/>
            <Activity/>
        </div>
    );
}