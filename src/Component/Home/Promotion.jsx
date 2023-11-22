import { useNavigate } from "react-router-dom";

function Promotions() {
  const navigate = useNavigate();
  return (
    <div className="promotion">
      <div className="promotion-img">
        <img src="picture/loma.jpg" alt="icon" />
      </div>
      <div className="promotion-text">
        <h5>View</h5>
        <h2>Promotions</h2>
        <p>Enjoy our deal and packages</p>
        <a href="#" className="btn-pro" onClick={() => navigate("/Promo")}>
          See More
        </a>
      </div>
    </div>
  );
}

export default Promotions;
