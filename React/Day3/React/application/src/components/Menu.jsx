import logo from "../assets/Images/biriyani.jpg"
import logo2 from "../assets/Images/Paneer.jpg"
import logo3 from "../assets/Images/dosa.jpg"


function Menu() {
  return (
    <>
    <section className="menu" id="menu">
      <h2>Today's Special</h2>

      <div className="menu-container">
        <div className="menu-card">
          <img
            src={logo}
            alt="Chicken Biryani"
          />
          <h3>Chicken Biryani</h3>
          <p>₹250</p>
        </div>

        <div className="menu-card">
          <img
            src={logo2}
            alt="Paneer Butter Masala"
          />
          <h3>Paneer Butter Masala</h3>
          <p>₹220</p>
        </div>

        <div className="menu-card">
          <img
            src={logo3}
            alt="Masala Dosa"
          />
          <h3>Masala Dosa</h3>
          <p>₹100</p>
        </div>
      </div>
    </section>
    
    </>
  );
}

export default Menu;