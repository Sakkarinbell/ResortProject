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
  faTrash,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import BookingModal from "./BookingModal";
import { useState } from "react";

function RoomRec({ rooms }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectRoom, setSelectRoom] = useState("");
  const [priceRoom, setPriceRoom] = useState(0);
  const handleOpen = (roomId, price) => {
    setSelectRoom(roomId);
    setPriceRoom(price);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
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
                  onClick={() => navigate("/Detailroom")}
                >
                  <img
                    src={room?.images?.length > 0 ? room?.images[0] : ""}
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
                    <FontAwesomeIcon icon={faHouse} /> Room Size: {room.size} ft
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
                    onClick={() => handleOpen(room.id, room.price)}
                  >
                    <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon> Booking
                  </button>
                  <button
                    className="add-cart-btn"
                    onClick={() => navigate(`/room/${room.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <BookingModal
        roomId={selectRoom}
        price={priceRoom}
        isOpen={open}
        onCancel={handleClose}
      />
      {/* <div className="main-wrapper">
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
      </div> */}
      
    </div>
    <div className="all-s">
     <div className="bill-info">
        <h2>Your stay</h2>
        <div className="checkin-out">
         <span>Check-in</span>
         <span>Check-out</span>
        </div>
        <div className="checktime">
         <span>12/08/2024</span>
         <span>13/08/2024</span>
        </div>
       <hr className="line"></hr>
       <div className="roomprice-bill">
         <h4>Room Bangkalow</h4>
         <h4>800 THB</h4>
       
        
         <p>    x1  </p>
         <div className="remove">
          <button><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Remove</button>
         </div>
        </div>
        <button className="addroom-bill"><FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon> Add room</button>
        <h4 className="total">Total:</h4>
    

       </div>
        
     
      
    
    
        
    </div>
  </div> 
    
  );
}

RoomRec.propTypes = {
  rooms: PropTypes.array,
};

export default RoomRec;
