import { useState, useEffect } from "react";
// import { Input } from "antd";
import Navbar from "../Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRoom } from "../../utils/firestores/roomCollection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { getData, saveData } from "../../utils/localStorageService";
import {
  CART,
  CHECK_IN,
  CHECK_OUT,
  GUEST,
  UUID,
} from "../../utils/constants/storage";
import { roomBooking } from "../../utils/firestores/bookingCollection";
import { PATH_LOGIN } from "../../utils/constants/path";

function Detailroom() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState([]);

  const checkIn = getData(CHECK_IN);
  const checkOut = getData(CHECK_OUT);
  const [amountRoom, setAmountRoom] = useState(0);
  // const [phone, setPhone] = useState("");
  const [remain, setRemain] = useState(0);

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
        setSize(data.size);
        setPrice(data.price);
        setImages(data.images || []);
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
  const onClickOk = async (price, totalRoom, images, roomName) => {
    try {
      const userId = getData(UUID);
      if (!userId) {
        return navigate(PATH_LOGIN);
      }
      const checkIn = getData(CHECK_IN);
      const checkOut = getData(CHECK_OUT);
      const guest = getData(GUEST);
      const data = {
        userId,
        id,
        checkIn,
        checkOut,
        guest,
        price,
        totalRoom,
        coverImage: images.length > 0 ? images[0] : "",
        roomName,
      };
      const carts = getData(CART);
      if (carts) {
        const cartsParse = JSON.parse(carts);
        const newCarts = [...cartsParse, data];
        saveData(CART,JSON.stringify(newCarts));
      } else {
        saveData(CART, JSON.stringify([data]));
      }
    } catch (error) {
      alert(error);
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
                <img
                  id={url}
                  src={url}
                  alt="#"
                  style={{
                    width: "100%",
                  }}
                />
              </>
            ))}
          </div>
        </div>
      </section>
      <div
        style={{ display: "flex", justifyContent: "space-between", margin: 2 }}
      >
        <div className="infobox">
          <h3>{name} </h3>
          <h3>{price} ฿</h3>
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
              <h4>{price} THB</h4>

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
            <h4 className="total">Total: {amountRoom * price} THB</h4>
          </div>
          <div style={{ display: "flex" }}>
            <button
              className="btn-book"
              onClick={() => onClickOk(price, amountRoom, images, name)}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detailroom;
