import Navbar from "../Navbar";
import Footer from "../Footer";
import Date from "./Date";
import Room from "./Room";
import { useState } from "react";
import { fetchRooms } from "../../utils/firestores/roomCollection";
import { saveData } from "../../utils/localStorageService";
import { CHECK_IN, CHECK_OUT, GUEST } from "../../utils/constants/storage";
import RoomRec from "../Home/RoomRec";

function Accom() {
  const [rooms, setRooms] = useState([]);
  const [isShow, setIsShow] = useState(true);
  const onSearch = async (checkIn, checkOut, guest) => {
    const { data } = await fetchRooms();
    setRooms(data || []);
    setIsShow(false);
    saveData(CHECK_IN, checkIn);
    saveData(CHECK_OUT, checkOut);
    saveData(GUEST, guest);
  };
  return (
    <div>
      <Navbar />
      <Date onSearch={onSearch} />
      <div>{isShow && <RoomRec />}</div>
      <Room rooms={rooms} />

      <Footer />
    </div>
  );
}

export default Accom;
