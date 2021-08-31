import { useContext, useEffect, useState } from "react";
import UserContext from "./user";
import { getUserByUserPhoneNum } from "./userdb";

export default function useUser(){
    const [activeUser, setActiveUser] = useState({});
    const user = useContext(UserContext);
    useEffect(() => {
        async function getUserObjByUserId() {
            console.log('user',user);
            const [reponse] = await getUserByUserPhoneNum(user.userPhoneNum);
            console.log('response',reponse);
            setActiveUser(reponse);
        }
        if (true) {
            getUserObjByUserId();
        }
    }, [user]);

    return { user: activeUser };
}

// export default function useUser(){
//     const [activeUser, setActiveuser] = useState('');
//     const user = useContext(UserContext);

//     useEffect(() => {
//         async function getUser(){

//         }
//     })
// }