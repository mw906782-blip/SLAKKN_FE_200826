import logo from "../assets/Images/Laptop.jpg"

const Card = () =>{
    return(<>
    <h1 className="h">Task-3</h1>
    <div className="card">
    <div className="imgone">
        <img src={logo} alt="image shown" />
    </div>
    <div className="P">
        <p>Brand: Acer</p>
        <p>Price: ₹50,000</p>
        <p>category: Gaming</p>
        <p>Availabilty: 8 left</p>
    </div>
    </div>
    </>)
}
export default Card
