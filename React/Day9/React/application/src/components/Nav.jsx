import { Link } from "react-router-dom"


const Nav = () => {
  return (
    <>
    <div className = "flex justify-around pt-6">
        <Link to="/React" className="w-30 rounded-2xl bg-black text-center text-white">Task-1</Link>
        <Link to="/Application" className="w-30 rounded-2xl bg-black text-center text-white">Task-2</Link>
    </div>
    </>
  )
}

export default Nav