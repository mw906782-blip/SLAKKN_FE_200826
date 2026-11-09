import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="bg-amber-400 flex justify-between p-2 text-white">
        <div>
            logo
        </div>
        <div className="flex gap-10">
            <Link to={"/"}>Register</Link>
            <Link to={"/Login"}>Login</Link>
            <Link to={"/Dashboard"} >Home</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar