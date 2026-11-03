import { useState } from "react"

const Application = () => {
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count + 1);
    }
    function decrement (){
        setCount(count - 1);
    }
  return (
    <>
    <h1 className="text-center pt-5">{count}</h1>
    <div className="text-center pt-6" >
        <button onClick={increment} className="w-30 p-1 rounded-2xl bg-amber-500 text-white">Increment</button>
        <button onClick={decrement} className="w-30 p-1 rounded-2xl bg-amber-500 text-white">Decrement</button>
    </div>
    </>
  )
}

export default Application