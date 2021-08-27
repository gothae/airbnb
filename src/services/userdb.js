export async function getAllUser(){
    const result = await fetch(`http://localhost:3001/user`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            return data;
        })
    console.log('result',result);
    return {result};
}

export async function getUserByUserPhoneNum(userPhoneNum){
    const userArray = await getAllUser();
    const user = () =>{
        for(var i=0; i<userArray.length; i++){
            if(userPhoneNum === userArray.result[i].userPhoneNum){
                // console.log('userArray.result[i]', userArray.result[i]);
                return userArray.result[i];
            }
        }
    }
    console.log('user',user);
    return user;
}

export async function userExists(phoneNum){
    const userArray = await getAllUser();
    let found = false

    for(var i=0; i<userArray.result.length; i++){
        if (phoneNum === userArray.result[i].userPhoneNum){
            found = true;
        }
    }
    console.log('found',found);
    return found;
}