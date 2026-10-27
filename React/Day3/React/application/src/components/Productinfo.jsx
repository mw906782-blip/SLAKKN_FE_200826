import i1  from "../assets/Images/DellXps.jpg"
import i2  from "../assets/Images/Lenovayoga.jpg"
import i3  from "../assets/Images/laptop.jpg"
import i4  from "../assets/Images/inpsiron15.jpg"
import i5  from "../assets/Images/HP15.jpg"
import i6  from "../assets/Images/macbook.jpg"


const Product = () => {
    return(<>
    <div className="h" id="product">
        <h1>
            Products
        </h1>
    </div>
    <div className="Parent">
        <div className="bbox">
        <div className="im">
            <img src={i1} alt="image shown"/>
            <h2>Brand: Dell</h2>
            <h3>Price: ₹60,000</h3>
            <h3>Available: 8 Left</h3>
        </div>
        </div>
        <div className="bbox">
        <div className="im">
            <img src={i2} alt="image shown"/>
            <h2>Brand: </h2>
            <h3>Price: ₹60,000</h3>
            <h3>Available: 10 Left</h3>
        </div>
        </div>
        <div className="bbox">
        <div className="im">
            <img src={i3} alt="image shown"/>
            <h2>Brand: HP</h2>
            <h3>Price: ₹60,000</h3>
            <h3>Available: 6 Left</h3>
        </div>
        </div>
        <div className="bbox">
        <div className="im">
            <img src={i4} alt="image shown"/>
            <h2>Brand: HP15</h2>
            <h3>Price: ₹60,000</h3>
            <h3>Available: 6 Left</h3>
        </div>
        </div>
        <div className="bbox">
        <div className="im">
            <img src={i5} alt="image shown"/>
            <h2>Brand: Dell</h2>
            <h3>Price: ₹60,000</h3>
            <h3>Available: 8 Left</h3>
        </div>
        </div>
        <div className="bbox">
        <div className="imi">
            <img src={i6} alt="image shown"/>
            <h2>Brand: Macbook</h2>
            <h3>Price: ₹60,000</h3>
            <h3>Available: 11 Left</h3>
        </div>
        </div>
    </div>
    
    </>)
}
export default Product