import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faHouse,
  faBed,
  faWifi,
  faUtensils,
  faStreetView,
  faWallet,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function RoomRec() {
  const navigate = useNavigate();
  return (
    <div className="divroom">
      <div className="main-wrapper">
        <div className="container">
          <div className="roomproduct-div">
            <div className="roomproduct-div-left">
              <div
                className="img-container"
                onClick={() => navigate("/Detailroom")}
              >
                <img src="picture/ex.jpg" alt="watch" />
              </div>
            </div>
            <div className="roomproduct-div-right">
              <span className="product-name">Superior Bungalow</span>
              <span className="product-price">1000฿</span>
              <div className="product-rating">
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>

                <span>
                  <FontAwesomeIcon icon={faStarHalfStroke} />
                </span>
                <span>(350 ratings)</span>
              </div>
              <div className="product-description">
                <p>
                  <FontAwesomeIcon icon={faHouse} /> Room Size: 320ft
                </p>
                <p>
                  <FontAwesomeIcon icon={faStreetView} /> Sea view
                </p>
                <p>
                  <FontAwesomeIcon icon={faBed} /> 1 King Bed
                </p>
                <p>
                  <FontAwesomeIcon icon={faWifi} /> Free WiFi
                </p>
                <p>
                  <FontAwesomeIcon icon={faUtensils} /> Free Breakfast
                </p>
              </div>
              <div className="btn-groups">
                <button
                  className="buy-now-btn"
                  onClick={() => navigate("/Payment")}
                >
                  <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon> Booking
                </button>
                <button
                  className="add-cart-btn"
                  onClick={() => navigate("/Accom")}
                >
                  <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> Add
                  Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-wrapper">
        <div className="container">
          <div className="roomproduct-div">
            <div className="roomproduct-div-left">
              <div
                className="img-container"
                onClick={() => navigate("/Detailroom")}
              >
                <img src="picture/ex.jpg" alt="watch" />
              </div>
            </div>
            <div className="roomproduct-div-right">
              <span className="product-name">Superior Bungalow</span>
              <span className="product-price">1000฿</span>
              <div className="product-rating">
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>

                <span>
                  <FontAwesomeIcon icon={faStarHalfStroke} />
                </span>
                <span>(350 ratings)</span>
              </div>
              <div className="product-description">
                <p>
                  <FontAwesomeIcon icon={faHouse} /> Room Size: 320ft
                </p>
                <p>
                  <FontAwesomeIcon icon={faStreetView} /> Sea view
                </p>
                <p>
                  <FontAwesomeIcon icon={faBed} /> 1 King Bed
                </p>
                <p>
                  <FontAwesomeIcon icon={faWifi} /> Free WiFi
                </p>
                <p>
                  <FontAwesomeIcon icon={faUtensils} /> Free Breakfast
                </p>
              </div>
              <div className="btn-groups">
                <button
                  className="buy-now-btn"
                  onClick={() => navigate("/Payment")}
                >
                  <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon> Booking
                </button>
                <button
                  className="add-cart-btn"
                  onClick={() => navigate("/Accom")}
                >
                  <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> Add
                  Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomRec;
