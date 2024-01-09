import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {
  faStar,
  faStarHalfStroke,
  faHouse,
  faBed,
  faWifi,
  faUtensils,
  faStreetView,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

function RoomRec({ rooms }) {
  const navigate = useNavigate();
  return (
    <div className="all">
      <div className="divroom">
        {rooms?.map((room) => (
          <div className="main-wrapper" key={room.id}>
            <div className="container-room">
              <div className="roomproduct-div">
                <div className="roomproduct-div-left">
                  <div
                    className="img-container"
                    onClick={() => navigate(`/room/${room.id}`)}
                  >
                    <img
                      src={room?.images?.length > 0 ? room?.images[0] : "/icon.png"}
                      alt="watch"
                    />
                  </div>
                </div>
                <div className="roomproduct-div-right">
                  <span className="product-name">{room.name}</span>
                  <span className="product-price">{room.price} ฿</span>
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
                    <span>(? ratings)</span>
                  </div>
                  <div className="product-description">
                    <p>
                      <FontAwesomeIcon icon={faHouse} /> Room Size: {room.size}{" "}
                      ft
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
                      onClick={() => navigate(`/room/${room.id}`)}
                    >
                      <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon>{" "}
                      Booking
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

RoomRec.propTypes = {
  rooms: PropTypes.array,
};

export default RoomRec;
