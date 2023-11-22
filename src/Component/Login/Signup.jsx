import {
  faLock,
  faEnvelope,
  faXmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../../config/firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass);
      if (user) {
        alert("Account Created succesfully");
      }
    } catch (error) {
      alert(error);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="wrapper-sign">
      <spam className="icon-close" onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faXmark} />
      </spam>
      <div className="form-box register">
        <h2>Registration</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="password"
              required
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> I agree to the terms & conditions
            </label>
          </div>
          <button type="submit" className="btn-login" onClick={submit}>
            Register
          </button>
          <div className="login-register">
            <p>
              Already a member?
              <Link to="/Login" className="login-link">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
