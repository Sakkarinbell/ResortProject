import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  PATH_ACOMMODATIONS,
  PATH_CONTACT,
  PATH_GALLERY,
  PATH_HOME,
  PATH_LOGIN,
  PATH_NEWS,
} from "../utils/constants/path";
import { getData, removeData } from "../utils/localStorageService";
import { ROLE, UUID } from "../utils/constants/storage";
// import { PATH_NEWS } from "../utils/constants/path";

function Navbar() {
  const navigate = useNavigate();
  const isAuth = getData(UUID);
  const onLogout = () => {
    removeData(UUID);
    removeData(ROLE);
    navigate(PATH_HOME);
  };
  return (
    <header className="head">
      <img
        src={"/icon.png"}
        style={{ width: 240 }}
        alt="icon"
        onClick={() => navigate("/")}
      />
      <nav className="navigation">
        <Link to={PATH_HOME}>HOME</Link>
        <Link to={PATH_ACOMMODATIONS}>ACOMMODATIONS</Link>
        <Link to={PATH_NEWS}>NEWS</Link>
        <Link to={PATH_GALLERY}>GALLERY</Link>
        <Link to={PATH_CONTACT}>CONTACT</Link>
        {isAuth ? (
          <>
            <button className="btncart">
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button className="btnLogin-popup" onClick={() => onLogout()}>
              LOGOUT
            </button>
          </>
        ) : (
          <button
            className="btnLogin-popup"
            onClick={() => navigate(PATH_LOGIN)}
          >
            LOGIN
          </button>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
