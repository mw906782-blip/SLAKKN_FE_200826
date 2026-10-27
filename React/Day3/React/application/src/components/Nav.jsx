import Restaurant from "./Restautant";
import Menu from "./Menu";
import Footers from "./Footers";

function Nav() {
  return (
    <>
    <div>
      <nav className="navbar">
      <h2>Food Paradise</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
    </div>
    <Restaurant/>
    <Menu/>
    <Footers/>
    
    
    
    
    </>
    

  );
}

export default Nav;