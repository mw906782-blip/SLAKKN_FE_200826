import logo from "../assets/Images/Laptop.jpg"
const Card = () =>{
    return(<>

    <div className="card">
    <div className="img">
        <img src="{logo}" alt="image shown" />
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
