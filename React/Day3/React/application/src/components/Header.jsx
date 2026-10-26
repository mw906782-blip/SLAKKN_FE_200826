import Producth from "../components/Producthero"
import logo from "../assets/Images/Brand.png"
import Product from "./Productinfo"
import Footer from "./Footer"
const Header = () => {
    return(<>
    <div className="Nav" id="home">
        <div className="img">
            <img src={logo} alt="Image shown" />
        </div>
        <div className="anchor">
            <a href="#home">Home</a>|
            <a href="#techstore">Tech Store</a>|
            <a href="#product">Product</a>|
            <a href="#contact">Contact</a>
        </div>

    </div>
    <Producth/>
    <Product/>
    <Footer/>
    
    
    </>)
}

export default Header;