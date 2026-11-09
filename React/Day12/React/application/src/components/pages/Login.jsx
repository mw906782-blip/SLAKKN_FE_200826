

import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Login = () => {

    const navigate = useNavigate()

    const[userEmail, setUserEmail] = useState("")
    const[userPassword, setUserPassword] = useState("")
    const[error,setError] = useState("")


    const handleEmail = (e) => {
        
        setUserEmail(e.target.value)

    }
    const handlePassword = (e) => {
        
        setUserPassword(e.target.value)

    }

    const handleClick = (e) =>{
        e.preventDefault()
        
        if( !userEmail || !userPassword){

                setError("Please Fill Form")
                return

        }

        const checkDatas = JSON.parse(localStorage.getItem("authdatas")) || []

        const checkEmail = checkDatas.find((e,i)=>e.userEmail==userEmail && e.userPassword == userPassword)

        if(checkEmail){
            setError("Invalid User")
            return
        }
        
        localStorage.setItem("isActive",JSON.stringify(checkEmail))

        setError("Wait 1 sec...")

        setTimeout(() => {
            navigate("/Dashboard")
        }, 1000); 
        

        setUserEmail("")
        setUserPassword("")

           

        

    }



  return (
    <div className="bg-gray-200 p-10 flex flex-col justify-center items-center h-100">
        <div className="bg-white rounded p-4 w-110">
            <h2 className="text-3xl mb-2">Register</h2>
            <p>Login Here If You're User!!</p>
            <p className="text-red-500">{error}</p>
        </div>
        <form className="bg-white p-5 flex flex-col gap-5 w-110 h-60">
            <div>
                <input type="email" value={userEmail} onChange={handleEmail} placeholder="Enter the Email" className="border border-blue-500  rounded p-1 w-100 text-center" />
            </div>
            <div>
                <input type="password" value={userPassword} onChange={handlePassword} placeholder="Enter the password" className="border border-blue-500  rounded p-1 w-100 text-center"/>
            </div>
            <div className="flex justify-center items-center">
                <button onClick={handleClick} className="bg-green-500 text-white rounded p-1 w-30 shadow ">Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login