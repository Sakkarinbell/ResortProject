import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Adminbar() {
  const navigate = useNavigate();
  return (
    <header>
      <img src={"picture/icon.png"} alt="icon" />
      <nav className="navigation">
        <Link to="/Adminroom">ROOM</Link>
        <Link to="/Adminstatusroom">ACOMMODATIONS</Link>
        <Link to="/Adminpromo">PROMOTIONS</Link>
        <Link to="/Admingallary">GALLERY</Link>
        <button className="btncart" onClick={() => navigate("/Cartpage")}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className="btnLogin-popup" onClick={() => navigate("/Login")}>
          Profile
        </button>
      </nav>
    </header>
  );
}

export default Adminbar;
