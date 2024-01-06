import { useEffect, useState } from "react";
import Adminbar from "./Headeradmin";
import { deleteFile, uploadFile } from "../../utils/firebaseStorage";
import { FOLDER_GALLERY } from "../../utils/constants/fireStorage";
import {
  deleteGallery,
  fetchGalleries,
  saveGallery,
} from "../../utils/firestores/galleryCollection";

function Admingallary() {
  const [img, setImg] = useState("");
  const [type, setType] = useState("ROOM");
  const [name, setName] = useState("");
  const [imgsUrl, setImgsUrl] = useState([]);

  const onCreateGallery = async (file) => {
    try {
      const url = await uploadFile(FOLDER_GALLERY, file);
      const { id } = await saveGallery(name, url, type);
      if (id) {
        setImgsUrl((prev) => [...prev, { name, url, type, id }]);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const onFetchGallery = async () => {
    const { galleries } = await fetchGalleries();
    if (galleries) {
      setImgsUrl(galleries);
    }
  };

  const onDeleteAllery = async (gallery) => {
    try {
      await deleteGallery(gallery.id);
      await deleteFile(gallery.url);
      const removeURL = imgsUrl.filter((img) => img.id !== gallery.id);
      setImgsUrl(removeURL);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    onFetchGallery();
  }, []);
  return (
    <>
      <Adminbar />
      <section className="gal-page">
        <div className="gal-main">
          
          <div>
            <input
              type="text"
              width="300"
              height="300"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <p>
              <input
                type="file"
                width="300"
                height="300"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </p>
          </div>
          <div>
            <button
              className="btn-add-pic"
              onClick={() => onCreateGallery(img)}
            >
              Add
            </button>
          </div>
        </div>
        <div className="gal-images">
          {imgsUrl.map((image) => (
            <div className="polaroid" key={image.id}>
              <img
                src={image.url}
                alt={image.name}
                style={{ width: "100%", height: "200px" }}
              />
              <div className="container">
                <p>{image.name}</p>
              </div>
              <button className="del-pic" onClick={() => onDeleteAllery(image)}>Delete</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Admingallary;
