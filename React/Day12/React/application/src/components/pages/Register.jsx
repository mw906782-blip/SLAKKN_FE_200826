import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Register = () => {

    const navigate = useNavigate()

    const[userName, setUserName] = useState("")
    const[userEmail, setUserEmail] = useState("")
    const[userPassword, setUserPassword] = useState("")
    const[error,setError] = useState("")


    const handleName = (e) => {

        setUserName(e.target.value)

    }
    const handleEmail = (e) => {
        
        setUserEmail(e.target.value)

    }
    const handlePassword = (e) => {
        
        setUserPassword(e.target.value)

    }

    const handleClick = (e) =>{
        e.preventDefault()
        
        if(!userName || !userEmail || !userPassword){

                setError("Please Fill Form")
                return

        }

        const checkDatas = JSON.parse(localStorage.getItem("authdatas")) || []

        const checkEmail = checkDatas.find((e,i)=>e.userEmail==userEmail)

        if(checkEmail){
            setError("Already Used")
            return
        }
        
        

        let obj = {id:Date.now(), userName, userEmail, userPassword}

        let datas = JSON.parse(localStorage.getItem("authdatas")) || []

        datas.push(obj)

        localStorage.setItem("authdata",JSON.stringify(datas))

        setUserName("")
        setUserEmail("")
        setUserPassword("")

        setError("Successfully Login..Please wait...")

        setTimeout(() => {
            navigate("/Login")
        }, 2000);    

        

    }



  return (
    <div className="bg-gray-200 p-10 flex flex-col justify-center items-center h-100">
        <div className="bg-white rounded p-4 w-110">
            <h2 className="text-3xl mb-2">Register</h2>
            <p>Register here if New User!!</p>
            <p className="text-red-500">{error}</p>
        </div>
        <form className="bg-white p-5 flex flex-col gap-5 w-110 h-60">
            <div>
                <input type="text" value={userName} onChange={handleName} placeholder="Enter the Name" className="border border-blue-500  rounded p-1 w-100 text-center" />
            </div>
            <div>
                <input type="email" value={userEmail} onChange={handleEmail} placeholder="Enter the Email" className="border border-blue-500  rounded p-1 w-100 text-center" />
            </div>
            <div>
                <input type="password" value={userPassword} onChange={handlePassword} placeholder="Enter the password" className="border border-blue-500  rounded p-1 w-100 text-center"/>
            </div>
            <div className="flex justify-center items-center">
                <button onClick={handleClick} className="bg-green-500 text-white rounded p-1 w-30 shadow ">Register</button>
            </div>
        </form>
    </div>
  )
}

export default Register