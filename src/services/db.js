export async function getUser(){
    const result = await fetch(`http://localhost:3001/user`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            return data;
        })
}