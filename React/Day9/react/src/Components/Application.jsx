import { useState } from "react"

const Application = () => {


    const [count,Setcount]=useState(0)

       Setcount(count++)

       

      
  return (
   <>


   <h1>Task2</h1>

   <h2>count:{count}</h2>


      <button onClick={Setcount}>increment</button><br /><br />
      <button>decrement</button><br /><br />
      <button>Reset</button>
   
   
   
   
   
   
   </>
  )
}

export default Application