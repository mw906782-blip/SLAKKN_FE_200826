import logo from "../assets/images/DellXps.jpg"
import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <>
    <div className="flex justify-between bg-gray-100 rounded-2xl items-center p-1 hover:bg-gray-200">
        <div>
            <img src={logo} alt="image shown" className="w-20 rounded-xl ml-6"/>
        </div>
        <div className="flex flex-row gap-6 mr-6 ">
            <Link to={"/"} className="hover:text-red-600 font-medium">String</Link>
            <Link to={"/Number"} className="hover:text-red-600 font-medium">Number</Link>
            <Link to={"/Boolean"} className="hover:text-red-600 font-medium">Boolean</Link>
            <Link to={"/Falsy"} className="hover:text-red-600 font-medium">Falsy</Link>
        </div>
    </div>
    </>
  )
}

export default Nav