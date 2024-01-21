import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Badge } from "antd";
import {
  PATH_ACOMMODATIONS,
  PATH_CART,
  // PATH_CONTACT,
  PATH_GALLERY,
  PATH_HOME,
  PATH_LOGIN,
  PATH_NEWS,
  PATH_ACCOUNT,
  PATH_CONTACT,
} from "../utils/constants/path";
import { getData, removeData } from "../utils/localStorageService";
import {
  CART,
  CHECK_IN,
  CHECK_OUT,
  ROLE,
  UUID,
} from "../utils/constants/storage";
import { useState } from "react";
import { useEffect } from "react";
// import { PATH_NEWS } from "../utils/constants/path";

function Navbar({ isGetCarts }) {
  const navigate = useNavigate();
  const isAuth = getData(UUID);
  // const carts = getData(CART);
  const [carts, setCarts] = useState(getData(CART));
  const onLogout = () => {
    removeData(UUID);
    removeData(ROLE);
    removeData(CART);
    removeData(CHECK_IN);
    removeData(CHECK_OUT);
    navigate(PATH_HOME);
  };
  useEffect(() => {
    console.log('render carts');
    setCarts(getData(CART));
  }, [isGetCarts]);
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
        <Link to={PATH_ACOMMODATIONS}>ACCOMMODATIONS</Link>
        <Link to={PATH_NEWS}>NEWS</Link>
        <Link to={PATH_GALLERY}>GALLERY</Link>

        <Link to={PATH_CONTACT}>CONTACT</Link>

        {isAuth ? (
          <>
            {/* <Link to={PATH_USER_ORDERS}>Booking</Link>*/}
            <Badge count={carts ? JSON.parse(carts).length : 0}>
              <Link to={PATH_CART}>
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </Badge>
            <button className="btncart">
              <FontAwesomeIcon
                icon={faUser}
                onClick={() => navigate(PATH_ACCOUNT)}
              />
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

Navbar.propTypes = {
  isGetCarts: PropTypes.bool,
};

export default Navbar;
