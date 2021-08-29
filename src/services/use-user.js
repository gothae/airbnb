import { useContext, useEffect, useState } from "react";
import UserContext from "./user";
import { getUserByUserPhoneNum } from "./userdb";

export default function useUser(){
    const [activeUser, setActiveUser] = useState({});
    const { user } = useContext(UserContext);

    useEffect(() => {
        async function getUserObjByUserId() {
            const [reponse] = await getUserByUserPhoneNum(user.userPhoneNum);
            // const [response] 로 사용하여야 하는가 ? 4:02:30
            setActiveUser(reponse);
        }
        if (user?.userPhoneNum) {
            getUserObjByUserId();
        }
    }, [user]);

    return { user: activeUser };
}