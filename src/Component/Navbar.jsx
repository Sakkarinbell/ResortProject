import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="head">
      <img src={"picture/icon.png"} alt="icon" onClick={() => navigate("/")} />
      <nav className="navigation">
        <Link to="/">HOME</Link>
        <Link to="/Accom">ACOMMODATIONS</Link>
        <Link to="/Promo">NEWS</Link>
        <Link to="/Gallerymain">GALLERY</Link>
        <Link to="/Contactpage">CONTACT</Link>

        <button className="btncart" onClick={() => navigate("/Cartpage")}>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button className="btncart" onClick={() => navigate("/Cartpage")}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className="btnLogin-popup" onClick={() => navigate("/Login")}>
          LOGIN
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
