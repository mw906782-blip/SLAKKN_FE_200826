
import logo from "../assets/images/DellXps.jpg"
import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <>
    
    <div className="flex justify-between bg-gray-100 items-center rounded-xl">
        <div>
            <img src={logo} alt="image shown" className="w-20 rounded-2xl ml-5"/>
        </div>
        <div className="flex flex-row gap-7 mr-6">
            <Link to={"/"}>Home</Link>
            <Link to={"/Contact"}>Contact</Link>
            <Link to={"/About"}>About</Link>
            <Link to={"/Help"}>Help</Link>

        </div>
    </div>
    
    
    </>
  )
}

export default Nav