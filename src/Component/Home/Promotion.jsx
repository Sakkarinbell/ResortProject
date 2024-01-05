import { useNavigate } from "react-router-dom";
import { PATH_USER_EVENT } from "../../utils/constants/path";

function Promotions() {
  const navigate = useNavigate();
  return (
    <div className="promotion">
      <div className="promotion-img">
        <img src="picture/loma.jpg" alt="icon" />
      </div>
      <div className="promotion-text">
        <h5>News</h5>
        <h2>Dophin Show</h2>
        <p>Get ticket Dophin Show Free</p>
        <a
          className="btn-pro"
          onClick={() => navigate(PATH_USER_EVENT)}
        >
          See More
        </a>
      </div>
    </div>
  );
}

export default Promotions;
