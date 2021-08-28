export async function getAllUser() {
    const result = await fetch(`http://localhost:3001/user`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            return data;
        })
    return { result };
}

export async function getUserByUserPhoneNum(userPhoneNum) {
    const userArray = await getAllUser()
    for (var i = 0; i < userArray.result.length; i++) {
        if (userPhoneNum === userArray.result[i].userPhoneNum) {
            var user = userArray.result[i];
            break
        }
    }
    return user;
}

export async function userExists(phoneNum) {
    const userArray = await getAllUser();
    let found = false

    for (var i = 0; i < userArray.result.length; i++) {
        if (phoneNum === userArray.result[i].userPhoneNum) {
            found = true;
        }
    }
    return found;
}