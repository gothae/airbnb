import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from '../../constant/route';
import { getAllUser, getUserByUserPhoneNum, userExists } from "../../services/userdb";
import Modal from "./modal";

export default function Header(){
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(menuOpen => !menuOpen)
    }

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
    
    const [user,setUser] = useState('');
    const [userPhoneNum, setUserPhoneNum] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await getAllUser();

        const isUserExists = await userExists(userPhoneNum);

        if(!isUserExists){
            // 가입

            // 이동
            history.push(ROUTES.MAIN);
        }else{
            const response = getUserByUserPhoneNum(userPhoneNum);
            setUser(response);
            // 로그인
            history.push(ROUTES.LOGGEDIN);
        }
    }

    return(
        <div className="flex justify-between mt-5">
            <Link to={ROUTES.MAIN}>
                <img src="./images/airbnb_logo.png" alt="airbnb_logo" width={100} height={100}/>
            </Link>
            <span>숙소 </span>
            <span>체험 </span>
            <Link to={ROUTES.EXPERIENCESONLINE}>
                <span>온라인 체험 </span>
            </Link>
            <span>호스트 되기 </span>
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
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <ul className={menuOpen? "block" : "hidden"}>
                    <li className="font-bold" onClick={openModal}>회원가입</li>
                    <li onClick={openModal}>로그인</li>
                    <Modal open={modalOpen} close={closeModal} header="로그인 또는 회원가입">
                        <form onSubmit={handleSubmit} method="POST" className="align-items-center">
                            <h1 className="font-bold p-1">에어비앤비에 오신 것을 환영합니다</h1>

                            <input
                                name = "userPhoneNum"
                                className="p-1"
                                type="text"
                                placeholder="전화번호"
                                onChange = { ({target}) => setUserPhoneNum(target.value)}
                                value = {userPhoneNum}
                            />
                            <input 
                                className = "p-1"
                                type="submit" 
                                value="계속" />
                        </form>
                    </Modal>
                </ul>
            </div>
        </div>
    );
}