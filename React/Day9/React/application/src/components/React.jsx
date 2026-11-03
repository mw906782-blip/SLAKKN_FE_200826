import {useState} from 'react'

const React = () => {
    const [name, setName] = useState("Sam");

  return (
    <>
    <div className=" text-center pt-6">
        <h2>{name}</h2>
        <button onClick={() => setName("Mahesh")} className="w-30 p-1 rounded-2xl bg-black text-white">Change Name</button>
    </div>
    </>
  )
}

export default React