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
} from "@fortawesome/free-solid-svg-icons";
import { fetchRooms } from "../../utils/firestores/roomCollection";
import { useEffect, useState } from "react";

function RoomRec() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const onFetchRooms = async () => {
    const { data } = await fetchRooms();
    setRooms(data || []);
  };

  useEffect(() => {
    onFetchRooms();
  }, []);
  return (
    <section className="section__container reccomend__container">
      <h2 className="section__header-1">Reccomend Room</h2>
      <div className="reccomend__grid">
        {rooms
          .filter((_, index) => index < 4)
          .map((room) => (
            <div
              className="reccomend__card"
              key={room.id}
              onClick={() => navigate(`/room/${room.id}`)}
            >
              <img
                src={room?.images?.length > 0 ? room.images[0] : ""}
                alt="reccomend room"
              />
              <div className="reccomend__content">
                <div className="reccomend__card__header">
                  <h4>{room.name}</h4>
                  <h4>{room.price} ฿</h4>
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
                  <FontAwesomeIcon icon={faHouse} /> Room Size: {room.size}
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
          ))}
      </div>
    </section>
  );
}

export default RoomRec;
