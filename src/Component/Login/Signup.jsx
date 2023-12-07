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
import { auth } from "../../config/firebase";
import { saveUser } from "../../utils/firestores/userCollection";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await auth.createUserWithEmailAndPassword(email, pass);
      if (user.user.uid) {
        const sUser = await saveUser(user.user.uid, firstName, lastName);
        console.log("sUser", sUser);
        alert("Account Created succesfully");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="wrapper-sign">
      <span className="icon-close" onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faXmark} />
      </span>
      <div className="form-box register">
        <h2>Registration</h2>
        <form action="#">
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
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label>First Name</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label>Last Name</label>
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
              <Link to="/login" className="login-link">
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
