import { faLock, faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchUser } from "../../utils/firestores/userCollection";
import { saveData } from "../../utils/localStorageService";
import { ROLE, UUID } from "../../utils/constants/storage";
import routes from "../../utils/routes";

function Login({ setRole }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await auth.signInWithEmailAndPassword(email, pass);
      if (!user.user.uid) return alert("Please check your email or password");
      const { user: dbUser } = await fetchUser(user.user.uid);
      if (!dbUser) return alert("Not found user");
      saveData(UUID, dbUser.id);
      saveData(ROLE, dbUser.data().role);
      setRole(dbUser.data().role);
      const redirectRole = routes[dbUser.data().role].redirect;
      navigate(redirectRole);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="wrapper">
      <span className="icon-close" onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faXmark} />
      </span>
      <div className="form-box login_box">
        <h2>Log In</h2>
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
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Rememeber me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn-login" onClick={submit}>
            Log In
          </button>
          <div className="login-register">
            <p>
              New To This Site?
              <Link to="/Signup" className="register-link">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
