import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from '../../constant/route';
import { createUser, getAllUser, getUserByUserPhoneNum, userExists } from "../../services/userdb";

export default function Header() {
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(menuOpen => !menuOpen)
    }

    const [user, setUser] = useState('');
    const [userPhoneNum, setUserPhoneNum] = useState('');
    const [userId, setUserId] = useState('');

    return (
        <div className="flex justify-between mt-10">
            <Link to={ROUTES.LOGGEDIN}>
                <img src="./images/airbnb_logo.png" alt="airbnb_logo" width={100} height={100} />
            </Link>
            <div className="font-bold mx-10">
                <span className="mx-10">숙소 </span>
                <span className="mx-10">체험 </span>
                <Link to={ROUTES.EXPERIENCESONLINE}>
                    <span className="mx-10">온라인 체험 </span>
                </Link>
                <span className="ml-52">호스트 되기 </span>
            </div>
            <div>
                <button
                    type="button"
                    onClick={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                    </svg>
                </button>

                <ul className={menuOpen ? "block p-1" : "hidden"} >
                    <Link to={ROUTES.MESSAGE}> 
                        <li className="font-bold p-1" >메시지</li>
                    </Link>
                    <Link to ={ROUTES.NOTIFICATIONS}>
                        <li className="font-bold p-1" >알림</li>
                    </Link>
                    <Link to = {ROUTES.TRIPS}>
                        <li className="font-bold p-1" >여행</li>
                    </Link>
                    <Link to={ROUTES.WISHLIST}>
                        <li className="font-bold p-1" >위시리스트</li>
                    </Link>
                    <hr></hr>
                    <li className="p-1">숙소 호스트 하기</li>
                    <li className="p-1">체험 호스팅 하기</li>
                    <li className="p-1">계정</li>
                    <hr></hr>
                    <li className="p-1">도움말</li>
                    <li className="p-1">로그아웃</li>
                </ul>
            </div>
        </div>
    );
}