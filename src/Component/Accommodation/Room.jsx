import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";
import { useParams } from "react-router-dom";
import { fetchRoom } from "../../utils/firestores/roomCollection";
import PropTypes from "prop-types";
import { getData } from "../../utils/localStorageService";
import BookingModal from "./BookingModal";
import {
  CHECK_IN,
  CHECK_OUT,
  GUEST,
  UUID,
} from "../../utils/constants/storage";
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
import {
  roomBooking,
  saveBookings,
} from "../../utils/firestores/bookingCollection";

function RoomRec({ rooms }) {
  const { id } = useParams();
  // const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const checkIn = getData(CHECK_IN);
  const checkOut = getData(CHECK_OUT);
  const [amountRoom, setAmountRoom] = useState(0);
  const [phone, setPhone] = useState("");
  const [remain, setRemain] = useState(0);

  const [open, setOpen] = useState(false);
  const [selectRoom, setSelectRoom] = useState("");
  const [priceRoom, setPriceRoom] = useState(0);
  const handleOpen = (roomId, price) => {
    setSelectRoom(roomId);
    setPriceRoom(price);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (id) {
      onFetcHRoom(id);
    }
  }, [id]);

  const onFetcHRoom = async (id) => {
    try {
      const { data } = await fetchRoom(id);
      const { data: booking } = await roomBooking(id, checkIn, checkOut);
      if (data) {
        setName(data.name);

        setPrice(data.price);
      }
      if (data && booking) {
        setRemain(data.totalRoom - booking.length);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const onIncrease = () => {
    if (amountRoom >= remain) return;
    setAmountRoom((pre) => pre + 1);
  };
  const onDecrease = () => {
    if (amountRoom <= 1) return;
    setAmountRoom((pre) => pre - 1);
  };
  const onClickOk = async (totalPrice, totalRoom, phoneNumber) => {
    try {
      const userId = getData(UUID);
      const checkIn = getData(CHECK_IN);
      const checkOut = getData(CHECK_OUT);
      const guest = getData(GUEST);
      await saveBookings(
        userId,
        id,
        checkIn,
        checkOut,
        guest,
        totalPrice,
        totalRoom,
        phoneNumber
      );
    } catch (error) {
      alert(error);
    }
  };
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
                    onClick={() => navigate("/Detailroom")}
                  >
                    <img
                      src={room?.images?.length > 0 ? room?.images[0] : ""}
                      alt="watch"
                    />
                  </div>
                </div>
                <div className="roomproduct-div-right">
                  <span className="product-name">
                    {room.name}
                    <p className="availablerooms">{remain} Room left</p>
                  </span>
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
                      onClick={() =>
                        onClickOk(price * amountRoom, amountRoom, phone)
                      }
                    >
                      <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon>{" "}
                      Booking
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
      </div>
      <div className="all-s">
        <div className="bill-info">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Your stay</h2>
            <p
              style={{
                backgroundColor: "red",
                color: "white",
                padding: 2,
                borderRadius: 6,
              }}
            >
              ว่าง {remain} ห้อง
            </p>
          </div>
          <div className="checkin-out">
            <span>Check-in</span>
            <span>Check-out</span>
          </div>
          <div className="checktime">
            <span>{checkIn}</span>
            <span>{checkOut}</span>
          </div>
          <hr className="line"></hr>
          <div className="roomprice-bill">
            <h4>{name}</h4>
            <p>{price} THB</p>

            <p> x{amountRoom} </p>
            <div className="remove">
              <button className="removeroom" onClick={onDecrease}>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              </button>
            </div>
          </div>
          <button className="addroom-bill" onClick={onIncrease}>
            <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon> Add room
          </button>
          <div className="total-bill">
            <h4 className="total">Total:</h4>
            <h4 className="total-price"> {amountRoom * price} THB</h4>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <Input
            placeholder="เบอร์ติดต่อ"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="btn-pay" onClick={() => handleOpen()}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

RoomRec.propTypes = {
  rooms: PropTypes.array,
};

export default RoomRec;
