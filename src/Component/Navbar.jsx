import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { PATH_GALLERY } from "../utils/constants/path";
// import { PATH_NEWS } from "../utils/constants/path";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="head">
      <img src={"picture/icon.png"} alt="icon" onClick={() => navigate("/")} />
      <nav className="navigation">
        <Link to="/">HOME</Link>
        <Link to="/Accom">ACOMMODATIONS</Link>
        {/* <Link to={PATH_NEWS}>NEWS</Link> */}
        <Link to={PATH_GALLERY}>GALLERY</Link>
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
