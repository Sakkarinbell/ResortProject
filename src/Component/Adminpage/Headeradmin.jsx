import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PATH_ADMIN_GALLERY,
  PATH_ADMIN_ROOM_LIST,
  PATH_ADMIN_BOOKING_LIST,
  PATH_EVENT_LIST,
} from "../../utils/constants/path";
import { removeData } from "../../utils/localStorageService";
import { ROLE, UUID } from "../../utils/constants/storage";

function Adminbar() {
  const onLogout = () => {
    removeData(UUID);
    removeData(ROLE);
    window.location.reload();
  };
  return (
    <header>
      <img src={"/icon.png"} alt="icon" width={200} />
      <nav className="navigation">
        <Link to={PATH_ADMIN_ROOM_LIST}>ROOM</Link>
        <Link to={PATH_ADMIN_BOOKING_LIST}>BOOKING</Link>
        <Link to={PATH_EVENT_LIST}>EVENTS</Link>
        <Link to={PATH_ADMIN_GALLERY}>GALLERY</Link>
        <button className="btncart">
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className="btnLogin-popup" onClick={() => onLogout()}>
          LOGOUT
        </button>
      </nav>
    </header>
  );
}

export default Adminbar;
