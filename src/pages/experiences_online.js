import { useEffect } from "react";
import React from "react";

export default function ExperiencesOnline(){
    useEffect(() =>{
        document.title = 'Airbnb';
    },[]);

    return (
        <div className="">
            <h1>온라인 체험</h1>
        </div>
    );
}