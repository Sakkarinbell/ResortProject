import { useNavigate } from "react-router-dom";
import { PATH_ACOMMODATIONS } from "../../utils/constants/path";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faPhone
} from "@fortawesome/free-solid-svg-icons";
function Welcome() {
  const navigate = useNavigate();
  return (
    <section className="imagebk">
      <div className="welcometext">
        <div className="welcometext2">
          
          <h2>Saengthong Beach Resort</h2>
          <p>Jantaburi , Thailand </p>
          <p> <FontAwesomeIcon icon={faPhone} />  081 000 3298</p>
          
          
        </div>
        <button className="btnbooknow" onClick={() => navigate(PATH_ACOMMODATIONS)}>
          Book Now
        </button>
      </div>
    </section>
  );
}

export default Welcome;
