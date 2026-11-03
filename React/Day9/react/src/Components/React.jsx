import { useState } from "react"


const React = () => {
      
   const [name, setName] = useState("Mahesh");
   return(<>

    <h1>
      {name}
    </h1>
    <button onClick={()=> setName("Sam")}>
      Change Name
    </button>
   </>
   )
  }

export default React