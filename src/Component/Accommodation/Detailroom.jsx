import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { fetchRoom } from "../../utils/firestores/roomCollection";
// import Accom from "./Accom";
import { PATH_ACOMMODATIONS } from "../../utils/constants/path";
function Detailroom() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState([]);
  useEffect(() => {
    if (id) {
      onFetcHRoom(id);
    }
  }, [id]);

  const onFetcHRoom = async (id) => {
    try {
      const { data } = await fetchRoom(id);
      if (data) {
        setName(data.name);
        setSize(data.size);
        setPrice(data.price);
        setImages(data.images || []);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <Navbar />
      <h1 className="roomname">
        {name} <button className="btn-book">Booking</button>{" "}
        <button
          className="btn-back"
          onClick={() => navigate(PATH_ACOMMODATIONS)}
        >
          Back
        </button>
      </h1>
      <h3 className="roomname">{price} ฿</h3>
      <div className="infobox">
        <h3>Amenities</h3>
        <p>
          <span className="sizename">Room size </span> : {size} ft
        </p>
        <h3>Bed</h3>
        <p> • Crib (available upon request)</p>
        <p> • Rollaway Bed (available upon request)</p>
        <p> • Connecting Room (available upon request)</p>
        <h3>Bathroom and toiletries</h3>
        <p> • Toiletries</p>
        <h3>Features</h3>
        <p> • Mini Bar </p>
        <p> • Coffee and Tea Making Facilities</p>
        <p> • 42-inch Flat Screen LED TV</p>
        <p> • Internet on TV & Video on demand</p>
        <p> • Media Hub & USB Charger</p>
        <p> • Bedside Touch Screen Control Panel</p>
        <p> • Safety Box</p>
        <h3>Internet</h3>
        <p> • Complimentary LAN & Wireless Internet</p>
        <h3>Service</h3>
        <p> • Twice Daily Turndown service</p>
      </div>

      <section className="container-detail">
        <div className="slide-container-room">
          <div className="slider-room">
            {images.map((url) => (
              <>
                <img id="slide-1" src={url} alt="#" />
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Detailroom;
