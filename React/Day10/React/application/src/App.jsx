import { useState } from "react";


const App = () => {
  const [datas, setDatas] = useState("")
  const [showDatas, setShowDatas] = useState(null)
 
    const handleClick = (e) => {

      
      
      setDatas(e.target.value)

    }

    const handleChange = (e) => {

      e.preventDefault()

      setShowDatas(datas)

    }



  return (
    <>
    <form>
      <input type="text" onChange={handleClick}/>
      <button onClick={handleChange}>Submit</button>
    </form>
    <div>
      <h1>{showDatas}</h1>
    </div>
    </>
  )
}

export default App