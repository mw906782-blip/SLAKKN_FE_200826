import logo from "../assets/Images/Laptop.jpg"
const Website = () =>{
    return(<>
    
     <div className = "Box">
                <div>
                    <img src={logo} alt="image shown" className = "img" />
                </div>
                <div className = "nav">
                        <a href="#">Home</a>
                        <a href="#">Contact</a>
                        <a href="#">about</a>
                        <a href="#">Login</a>
                </div>
            </div>
    </>)
}

export default Website