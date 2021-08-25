import React from "react";

import Header from "../components/header/index";
import Body from "../components/Body";
export default function Main(){
    return(
        <div className="bg-gray-background">
            <Header/>
            <Body/>
        </div>
    );
}