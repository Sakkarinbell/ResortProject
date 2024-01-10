import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <img src={"picture/icon.png"} className="logo" />
        </div>
        <div className="col">
          <h4>Address</h4>
          <p>20/2,Pak Nam Laem Sing</p>
          <p>Subdistrict,Laem Sing</p>
          <p>District,Chanthaburi 22130</p>
          <p className="email-id">Saengthongbeach@email.com</p>
        </div>

        <div className="col">
          <h4>Newsletter</h4>
          <form className="form1">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder=" Enter your email id" required />
            <button type="submit">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>
          <h3>081 000 3298</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
