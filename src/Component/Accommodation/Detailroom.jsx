import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

function Detailroom() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <h1 className="roomname">TWO-BEDROOM BUNGALOW</h1>
      <a className="btn-detail" onClick={() => navigate("/Accom")}>
        BACK
      </a>
      <section className="container-detail">
        <div className="slide-container-room">
          <div className="slider-room">
            <img id="slide-1" src="picture/ex.jpg" alt="#" />
            <img id="slide-2" src="picture/gallery.jpg" alt="#" />
            <img id="slide-3" src="picture/pool.jpg" alt="#" />
            <div className="slider-nav-room">
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
              <a href="#slide-3"></a>
            </div>
          </div>
        </div>
      </section>
      <div className="infobox">
        <h3>AMENITIES</h3>
        <p>
          <span className="sizename">Room Size </span> : 280 ft
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
