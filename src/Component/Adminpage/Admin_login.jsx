import { faLock, faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useState } from "react";

function Adminlogin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await auth.signInWithEmailAndPassword(email, pass);
      if (user) {
        alert("Login succesfully");
      }
    } catch (error) {
      alert(error);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <spam className="icon-close" onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faXmark} />
      </spam>
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
          <button type="submit" className="btn-login" onClick={submit}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
export default Adminlogin;
