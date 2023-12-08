import { useNavigate } from "react-router-dom";

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
        <a href="#" className="btn-pro" onClick={() => navigate("/Promo")}>
          See More
        </a>
      </div>
    </div>
  );
}

export default Promotions;
