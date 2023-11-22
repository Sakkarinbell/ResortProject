// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faHouse,
  faBed,
  faWifi,
  faUtensils,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";

function RoomRec() {
  // const navigate = useNavigate();
  return (
    <section className="section__container reccomend__container">
      <h2 className="section__header-1">Reccomend Room</h2>
      <div className="reccomend__grid">
        <div className="reccomend__card">
          <img src="picture\room1_row_house\r1.png" alt="reccomend room" />
          <div className="reccomend__content">
            <div className="reccomend__card__header">
              <h4>Bungalow</h4>
              <h4>700฿</h4>
            </div>
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
            <p>
              <FontAwesomeIcon icon={faHouse} /> Room Size: 320ft
            </p>
            <p>
              <FontAwesomeIcon icon={faStreetView} /> Garden view
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
        </div>
        <div className="reccomend__card">
          <img
            src="picture\r6_twin_room_2king_2bed\r6_1.png"
            alt="reccomend room"
          />
          <div className="reccomend__content">
            <div className="reccomend__card__header">
              <h4>Two-Bedroom Bungalow</h4>
              <h4>1800฿</h4>
            </div>
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
            <p>
              <FontAwesomeIcon icon={faHouse} /> Room Size: 320ft
            </p>
            <p>
              <FontAwesomeIcon icon={faStreetView} /> Balcony/terrace
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
        </div>
        <div className="reccomend__card">
          <img
            src="picture\r5_twin_room_with_pool\r5_1.png"
            alt="reccomend room"
          />
          <div className="reccomend__content">
            <div className="reccomend__card__header">
              <h4>Superior Bungalow</h4>
              <h4>1000฿</h4>
            </div>
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
        </div>
      </div>
    </section>
  );
}

export default RoomRec;
