import { useState } from "react"

const Task = () => {
    function App(){
        const[ login, setlogin] = useState(false);
    }
  return (
    <>
    <div>
        <h2>
            {login ? "welcome User" : "please Login"}
        </h2>
        <button onclick={() => setlogin(!login)}>
            {login ? "Logout" : "Login"}
        </button>
    </div>


    </>
  )
}

export default Task



