import { useRef,useState } from "react"
import { useHistory } from "react-router-dom"
export default function Signup(){
    const [isLoading,setIsLoading] = useState(false)
    const phoneRef = useRef(null)
    const history = useHistory()

    function onSubmit(e){
        e.preventDefault()

        if(!isLoading){
            setIsLoading(true)
            fetch(`http://localhost:3001/user/`,{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    userPhoneNum : phoneRef.current.value
                })
            })
            .then((res)=>{
                if(res.ok){
                    alert('회원가입이 완료었습니다')
                    history.push('/')
                    setIsLoading(false)
                }
            })
        }
    }
    return(
        <form onSubmit={onSubmit}>
            <div className="input_number">
                <input type="text" placeholder="전화번호" ref={phoneRef} />
            </div>
            <button style={{opacity:isLoading?0.3:1}}>{isLoading? "가입중입니다...":"회원가입"}</button>
        </form>
    )
}