import { useState } from "react"


const React = () => {
      
    const [name,Setname]=useState("Arun")   

    const Name =()=>{



    }

 return (
   <>


   <h1>name:{name}</h1>

   <button onClick={()=>Setname("kumar")}>click me</button>
   
   
   
   
   </>
  )
}

export default React