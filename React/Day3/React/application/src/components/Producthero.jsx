import img1 from "../assets/Images/macbook.jpg"
import img2 from "../assets/Images/rog.jpg"
const Producth = () => {
    return(<>
    
        <div className="hero" id="techstore">
            <h2>Power Your Possibilities</h2>
            <p>Discover reliable laptops designed for work, study, creativity, and everyday life. Experience modern technology, smooth performance, and thoughtful designall in one place.</p> 
            <p>Discover the future of technology, where innovation meets imagination. From artificial intelligence and robotics to quantum computing and virtual reality, explore the groundbreaking ideas that are 
                transforming our world. Stay updated with emerging technologies, exciting digital innovations, and the next big developments that will shape how we live, work, and connect in the future.</p>  
            <h1>New Arrivals</h1>             
        </div>
        <div className="hero1">
            <div className="pro1">
                
                    <h2>Mazebook pro 14</h2>
                    <img src={img1}></img>
            </div>
            <div className="pro">
                 <h2>Maze ROG Zephyrus G16</h2>
                    <img src={img2}></img>
            </div>
        </div>
    </>)
}
export default Producth