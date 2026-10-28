import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <>
      <div className="flex flex-row justify-around content-center items-center">
      <Link to={"/Task"} className="bg-black text-white text-none p-2 rounded-2xl w-20  text-center hover:bg-yellow-500">Task-1</Link>
      <Link to={"/Taskone"} className="bg-black text-white text-none p-2 rounded-2xl w-20  text-center hover:bg-yellow-500">Task-2</Link>
      <Link to={"/Tasktwo"} className="bg-black text-white text-none p-2 rounded-2xl w-20  text-center hover:bg-yellow-500">Task-3</Link>
      <Link to={"/Taskthree"} className="bg-black text-white text-none p-2 rounded-2xl w-20  text-center hover:bg-yellow-500">Task-4</Link>
      </div>
    
    
    </>
  )
}

export default Nav