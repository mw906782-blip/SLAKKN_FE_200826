
import logo from "../assets/images/DellXps.jpg"
import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <>
    
    <div className="flex justify-between bg-gray-100 items-center rounded-3xl hover:bg-gray-200">
        <div>
            <img src={logo} alt="image shown" className="w-20 rounded-2xl ml-5"/>
        </div>
        <div className="flex flex-row gap-7 mr-6">
            <Link to={"/"} className="hover:text-red-600">Home</Link>
            <Link to={"/Contact"} className="hover:text-red-600">Contact</Link>
            <Link to={"/About"} className="hover:text-red-600">About</Link>
            <Link to={"/Services"} className="hover:text-red-600">Services</Link>

        </div>
    </div>
    
    
    </>
  )
}

export default Nav