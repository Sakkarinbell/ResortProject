import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          We want to hear from you. Whether you have an enquiry, feedback or
          simply want to talk, there are a number of ways you can reach us.
        </p>
      </div>
      <div className="container">
        <div className="contactinfo">
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>
                20/2, Paknam Laem Sing Subdistrict, Laem Sing District,
                Chanthaburi 22130
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>081 000 3298</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>Saengthongbeach@email.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form action="https://formsubmit.co/nipitpon.ampa@bumail.net" method="POST">
            <h2>Send Message</h2>
            <div className="inputbox">
              <input type="text" name="name" required placeholder="" />
              <span>Full Name</span>
            </div>
            <div className="inputbox">
              <input type="email" name="email" required placeholder="" />
              <span>Email</span>
            </div>
            <div className="inputbox">
              <textarea name="msg" required placeholder=""></textarea>
              <span>Type your Message...</span>
            </div>
            <div className="inputbox">
              <input type="submit" name="" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
