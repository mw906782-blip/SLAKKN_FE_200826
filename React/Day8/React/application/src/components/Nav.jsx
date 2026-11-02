import { Link } from "react-router-dom"


const Nav = () => {
  return (
    <>
    <div className ="flex justify-around p-3 bg-gray-200 rounded-xl ">
        <Link to="/Array" className="w-20 p-2 text-white bg-cyan-700 text-center  rounded-2xl">Task-1</Link>
        <Link to="/Object" className="w-20 p-2 text-white bg-cyan-700 text-center  rounded-2xl">Task-2</Link>
        <Link to="/Arrayofobject" className="w-20 p-2 text-white bg-cyan-700 text-center  rounded-2xl">Task-3</Link>
        <Link to="/Props" className="w-20 p-2 text-white bg-cyan-700 text-center  rounded-2xl">Task-4</Link>
    </div>
    </>
  )
}

export default Nav