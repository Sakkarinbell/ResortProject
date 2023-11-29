import { useState } from "react";
import Adminbar from "./Headeradmin";
import { uploadFiles } from "../../utils/firebaseStorage";
import { FOLDER_ROOM } from "../../utils/constants/fireStorage";
import { saveRoom } from "../../utils/firestores/roomCollection";

function Adminroom() {
  const [total, setTotal] = useState(0);
  const [type, setType] = useState("");
  const [size, setSize] = useState("");
  const [bed, setBed] = useState("");
  const [wifi, setWifi] = useState(true);
  const [breakfast, setBreakfast] = useState(true);
  const [files, setFiles] = useState([]);
  const onCreateRoom = async () => {
    const resp = await uploadFiles(FOLDER_ROOM, files);
    await saveRoom(total,size,type,bed,wifi,breakfast,resp)
  };
  return (
    <>
      <Adminbar />
      <div className="room-page">
        <div className="room-main">
          <div className="room-left-layout">
            <div className="room-num-type">
              <p>จำนวนห้องทั้งหมด :</p>
              <input
                className="Entry-number"
                type="number"
                id="total"
                name="total"
                value={total}
                onChange={(e) => setTotal(Number(e.target.value))}
                required
              />
              <p>ประเภทห้อง :</p>
              <input
                className="Entry-type"
                type="text"
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              />
            </div>
            <div className="room-info">
              <p>ขนาดห้องพัก :</p>
              <input
                className="Entry-info"
                type="text"
                id="type"
                name="size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
              />
              <p>เตียงนอน :</p>
              <input
                className="Entry-info"
                type="text"
                id="type"
                name="bed"
                value={bed}
                onChange={(e) => setBed(e.target.value)}
                required
              />
              <p>Free WiFi :</p>
              <input
                className="Entry-info"
                type="checkbox"
                id="type"
                name="wifi"
                value={wifi}
                onChange={(e) => setWifi(e.target.value)}
                required
              />
              <p>อาหารเช้า :</p>
              <input
                className="Entry-info"
                type="checkbox"
                id="type"
                name="breakfast"
                value={breakfast}
                onChange={(e) => setBreakfast(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="room-right-layout">
            <div className="room-img">
              <input
                type="file"
                id="image"
                name=""
                width="120"
                height="120"
                onChange={(e) => setFiles(e.target.files)}
              />
            </div>
          </div>
        </div>
        <button className="btn-add-room" onClick={() => onCreateRoom()}>
          ADD
        </button>
      </div>
    </>
  );
}
export default Adminroom;
