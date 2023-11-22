import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <img src={"picture/icon.png"} className="logo" />
          <p>Saengthong Beach Resort</p>
        </div>
        <div className="col">
          <h3>Address</h3>
          <p>20/2,Pak Nam Laem Sing</p>
          <p>Subdistrict,Laem Sing</p>
          <p>District,Chanthaburi 22130</p>
          <p className="email-id">Saengthongbeach@email.com</p>
          <h4>081 000 3298</h4>
        </div>
        <div className="col">
          <h3>Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Accom">ACOMMODATIONS</Link>
            </li>
            <li>
              <Link to="/Promo">PROMOTIONS</Link>
            </li>
            <li>
              <Link to="/Gallerymain">GALLERY</Link>
            </li>
            <li>
              <Link to="/Contactpage">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>Newsletter</h3>
          <form className="form1">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder=" Enter your email id" required />
            <button type="submit">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>
          <div className="social-icons">
            {/* <FontAwesomeIcon icon={faXTwitter} /> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
