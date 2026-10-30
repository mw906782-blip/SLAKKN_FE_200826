import { useState } from "react"


function Task() {
  const [login, setLogin] = useState(false);

  return (
    <div className=" text-center">
      <h2 >
        {login ? "Welcome User" : "Please Login"}
      </h2>

      <button onClick={() => setLogin(!login)} className="bg-amber-500 text-white rounded-2xl w-30">
        {login ? "Logout" : "Login"}
      </button>
    </div>
  );
}


export default Task



