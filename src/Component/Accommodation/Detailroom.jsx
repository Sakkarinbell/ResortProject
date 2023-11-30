import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { /*useNavigate,*/ useParams } from "react-router-dom";
import { fetchRoom } from "../../utils/firestores/roomCollection";
function Detailroom() {
  const { id } = useParams();
  // const navigate = useNavigate();
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
      <h1 className="roomname">{name}</h1>
      <h3 className="roomname">{price} ฿</h3>
      <div className="infobox">
        <h3>AMENITIES</h3>
        <p>
          <span className="sizename">Room Size </span> : {size} ft
        </p>
        <h3>BED</h3>
        <p> • Crib (available upon request)</p>
        <p> • Rollaway Bed (available upon request)</p>
        <p> • Connecting Room (available upon request)</p>
        <h3>Bathroom and toiletries</h3>
        <p> • Toiletries</p>
        <h3>FEATURES</h3>
        <p> • Mini Bar </p>
        <p> • Coffee and Tea Making Facilities</p>
        <p> • 42-inch Flat Screen LED TV</p>
        <p> • Internet on TV & Video on demand</p>
        <p> • Media Hub & USB Charger</p>
        <p> • Bedside Touch Screen Control Panel</p>
        <p> • Safety Box</p>
        <h3>INTERNET</h3>
        <p> • Complimentary LAN & Wireless Internet</p>
        <h3>SERVICE</h3>
        <p> • Twice Daily Turndown service</p>
      </div>
    </>
  );
}

export default Detailroom;
