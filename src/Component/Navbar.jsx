import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  PATH_ACOMMODATIONS,
  PATH_GALLERY,
  PATH_HOME,
  PATH_LOGIN,
} from "../utils/constants/path";
import { getData } from "../utils/localStorageService";
import { UUID } from "../utils/constants/storage";
// import { PATH_NEWS } from "../utils/constants/path";

function Navbar() {
  const navigate = useNavigate();
  const isAuth = getData(UUID);
  return (
    <header className="head">
      <img src={"picture/icon.png"} alt="icon" onClick={() => navigate("/")} />
      <nav className="navigation">
        <Link to={PATH_HOME}>HOME</Link>
        <Link to={PATH_ACOMMODATIONS}>ACOMMODATIONS</Link>
        <Link to={PATH_GALLERY}>GALLERY</Link>
        <Link to="/Contactpage">CONTACT</Link>
        {isAuth ? (
          <button className="btncart">
            <FontAwesomeIcon icon={faUser} />
          </button>
        ) : (
          <button className="btnLogin-popup" onClick={() => navigate(PATH_LOGIN)}>
            LOGIN
          </button>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
