import { useState, useEffect } from "react";
import Adminbar from "./Headeradmin";
import { deleteFile, uploadFiles } from "../../utils/firebaseStorage";
import { FOLDER_ROOM } from "../../utils/constants/fireStorage";
import {
  deleteRoom,
  fetchRoom,
  saveRoom,
  updateRoom,
} from "../../utils/firestores/roomCollection";
import { useParams, useNavigate } from "react-router-dom";
import { PATH_ADMIN_ROOM_LIST } from "../../utils/constants/path";

function Adminroom() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [totalRoom, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);
  const [priceSale, setPriceSale] = useState(0);
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [removeImages, setRemoveImages] = useState([]);

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
        setTotal(data.totalRoom);
        setSize(data.size);
        setPrice(data.price);
        setPriceSale(data.priceSale);
        setImages(data.images);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const onCreateRoom = async () => {
    let imageURLS = [];
    if (files.length > 0) {
      const resp = await uploadFiles(FOLDER_ROOM, files);
      imageURLS = [...resp];
    }
    await saveRoom(totalRoom, size, name, price, priceSale, 0, 0, imageURLS);
  };

  const onDeleteImage = async (url) => {
    setImages((prev) => prev.filter((imageURL) => imageURL !== url));
    setRemoveImages((prev) => [...prev, url]);
  };

  const onEditRoom = async (id) => {
    try {
      let imagesURL = [];
      if (files.length > 0) {
        const resp = await uploadFiles(FOLDER_ROOM, files);
        setImages((prev) => [...prev, ...resp]);
        imagesURL = [...images, ...resp];
      }
      if (removeImages.length > 0) {
        for (let index = 0; index < removeImages.length; index++) {
          const imageURL = removeImages[index];
          await deleteFile(imageURL);
        }
      }
      await updateRoom(id, totalRoom, size, name, price, priceSale, imagesURL);
    } catch (error) {
      alert("update room error" + error.message);
    }
  };

  const onDeleteRoom = async (id) => {
    try {
      await deleteRoom(id);
      navigate(PATH_ADMIN_ROOM_LIST);
    } catch (error) {
      alert("delete room failed");
    }
  };

  return (
    <>
      <Adminbar />
      <div className="room-page">
        <div className="room-main">
          <div className="room-left-layout">
            <div className="room-num-type">
              <p >ชื่อห้องพัก :</p>
              <input
                className="Entry-type"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <p >จำนวนห้องทั้งหมด :</p>
              <input
                className="Entry-number"
                type="number"
                id="total"
                name="totalRoom"
                value={totalRoom}
                onChange={(e) => setTotal(Number(e.target.value))}
                required
              />
            </div>
            <div className="room-info">
              <p className="costt">ราคา :</p>
              <input
                className="Entry-info"
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                required
              />
              <p className="costt">ราคาส่วนลด :</p>
              <input
                className="Entry-info"
                type="text"
                id="type"
                name="priceSale"
                value={priceSale}
                onChange={(e) => setPriceSale(Number(e.target.value))}
                required
              />
              <p className="costt">ขนาดห้องพัก :</p>
              <input
                className="Entry-info"
                type="text"
                id="type"
                name="size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
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
            <div>
              {images.map((url) => (
                <>
                  <img src={url} key={url} alt="images" width={200} />
                  <button className="del-pic" onClick={() => onDeleteImage(url)}>Delete</button>
                </>
              ))}
            </div>
          </div>
        </div>
        {id ? (
          <div>
            <button className="btn-add-room" onClick={() => onEditRoom(id)}>
              Save
            </button>
            <button className="btn-delete-room" onClick={() => onDeleteRoom(id)}>
              Delete
            </button>
          </div>
        ) : (
          <button className="btn-add-room" onClick={() => onCreateRoom()}>
            Add
          </button>
        )}
      </div>
    </>
  );
}
export default Adminroom;
