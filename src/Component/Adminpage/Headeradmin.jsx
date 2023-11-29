import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PATH_ADMIN_GALLERY,
  PATH_ADMIN_NEWS,
  PATH_ADMIN_ROOM,
} from "../../utils/constants/path";

function Adminbar() {
  // const navigate = useNavigate();
  return (
    <header>
      <img src={"/icon.png"} alt="icon" width={200} />
      <nav className="navigation">
        <Link to={PATH_ADMIN_ROOM}>ROOM</Link>
        <Link to={PATH_ADMIN_NEWS}>NEWS</Link>
        <Link to={PATH_ADMIN_GALLERY}>GALLERY</Link>
        <button className="btncart">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </nav>
    </header>
  );
}

export default Adminbar;
