import logo from "../assets/Images/Laptop.jpg"
const Website = () =>{
    return(<>
    <h1 className="h">Task-2</h1>
    <div className = "title">
        <h3>Laptop World</h3>
    </div>
     <div className = "Box">
                <div className = "img">
                    <img src={logo} alt="image shown" />
                </div>
                <div className = "nav">
                        <a href="#">Home</a>
                        <a href="#">Contact</a>
                        <a href="#">about</a>
                        <a href="#">Login</a>
                </div>
     </div>
     <div className="Boxone">
        <div className = "content">
       <h4>Welcome to the Laptop</h4>
       <p>A laptop is a portable computer that you can carry anywhere. It has a
        screen, keyboard, touchpad, and battery in one device, so you can work,
        study, or watch videos without a desktop setup. </p>
     </div>
        <div className="footer">
            <p>&copy; 2026 My Website. All rights reserved.</p>
        </div>
     
     </div>
    </>)
}

export default Website