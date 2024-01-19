import { useState, useEffect } from "react";
// import { Input } from "antd";
import Navbar from "../Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRoom } from "../../utils/firestores/roomCollection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
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
import calculateDay from "../../utils/helper/calculateDay";

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
  const [remain, setRemain] = useState(0);
  const [isGetCarts, setIsGetCarts] = useState(false);
  const amountDay = calculateDay(checkIn, checkOut);

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
  const onClickOk = async (price, totalRoom, images, roomName, amountDay) => {
    try {
      const userId = getData(UUID);
      if (!userId) {
        return navigate(PATH_LOGIN);
      }
      const checkIn = getData(CHECK_IN);
      const checkOut = getData(CHECK_OUT);
      const guest = getData(GUEST);
      if (!checkIn || !checkOut || !guest) {
        return alert("กรุณาระบุ วันที่ เช็คอิน/เอ้าท์ และ จำนวนผู้เข้าพัก");
      }
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
        amountDay,
      };
      const carts = getData(CART);
      setIsGetCarts(!isGetCarts);
      if (carts) {
        const cartsParse = JSON.parse(carts);
        const newCarts = [...cartsParse, data];
        saveData(CART, JSON.stringify(newCarts));
      } else {
        saveData(CART, JSON.stringify([data]));
      }
    } catch (error) {
      alert(error);
    }
  };
  const formatDate = (date) => {
    if (!date) return "-";
    const [year, month, day] = date.split("-");
    return `${month}-${day}-${year}`;
  };
  return (
    <>
      <Navbar isGetCarts={isGetCarts} />
      <section className="container-detail">
        <div className="slide-container-room">
          <div className="slider-room">
            {images.map((url) => (
              <>
                <img
                  id={url}
                  src={url || "/icon.png"}
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
          <h2>{name} </h2>
          <h4>{price} ฿</h4>
          <h5>Amenities</h5>
          <p>
            <span className="sizename">Room size </span> : {size} ft
          </p>
          <h5>Bed</h5>
          <p> • Crib (available upon request)</p>
          <p> • Rollaway Bed (available upon request)</p>
          <p> • Connecting Room (available upon request)</p>
          <h5>Bathroom and toiletries</h5>
          <p> • Toiletries</p>
          <h5>Features</h5>
          <p> • Mini Bar </p>
          <p> • Coffee and Tea Making Facilities</p>
          <p> • 42-inch Flat Screen LED TV</p>
          <p> • Internet on TV & Video on demand</p>
          <p> • Media Hub & USB Charger</p>
          <p> • Bedside Touch Screen Control Panel</p>
          <p> • Safety Box</p>
          <h5>Internet</h5>
          <p> • Complimentary LAN & Wireless Internet</p>
          <h5>Service</h5>
          <p> • Twice Daily Turndown service</p>
        </div>
        <div className="all-s">
          <div className="bill-info">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Your stay</h2>
              <p className="Availableroom">{remain - amountRoom} Room left!</p>
            </div>
            <div className="checkin-out">
              <h4>Check-in</h4>
              <h4>Check-out</h4>
            </div>
            <div className="checktime">
              <h4>{formatDate(checkIn)}</h4>
              <h4>{formatDate(checkOut)}</h4>
            </div>
            <hr className="line"></hr>
            <div className="roomprice-bill">
              <span>{name}</span>
              <span>{price * amountDay} THB</span>

              <span>
                {" "}
                <button className="removeroom" onClick={onDecrease}>
                  <FontAwesomeIcon icon={faSquareMinus}></FontAwesomeIcon>
                </button>
                {amountRoom}
                <button className="addroom-bill" onClick={onIncrease}>
                  <FontAwesomeIcon icon={faSquarePlus}></FontAwesomeIcon>
                </button>
              </span>
              <div className="remove"></div>
            </div>
          </div>

          <div>
            <h5 className="total">
              Total: {amountRoom * price * amountDay} THB
            </h5>
            <button
              className="btn-book"
              onClick={() =>
                onClickOk(price, amountRoom, images, name, amountDay)
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detailroom;
