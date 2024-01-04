import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Adminbar from "./Headeradmin";
import {
  deleteEvent,
  fetchEvent,
  saveEvent,
  updateEvent,
} from "../../utils/firestores/eventCollection";
import { deleteFile, uploadFile } from "../../utils/firebaseStorage";
import { FOLDER_EVENT } from "../../utils/constants/fireStorage";
import { PATH_EVENT } from "../../utils/constants/path";

function Adminpromo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [hideImage, setHideImage] = useState(false);
  const onCreateEvent = async () => {
    let imageURL = "";
    if (file) {
      const resp = await uploadFile(FOLDER_EVENT, file);
      imageURL = resp;
    }
    await saveEvent(eventName, description, imageURL);
  };

  const onDeleteImage = () => {
    setHideImage(true);
  };

  const onEditEvent = async (id) => {
    try {
      let url = imageURL;
      if (file) {
        const resp = await uploadFile(FOLDER_EVENT, file);
        url = resp;
        setHideImage(false);
      }
      if (imageURL) {
        await deleteFile(imageURL);
      }
      await updateEvent(id, eventName, description, url);
      await onFetchEvent(id);
    } catch (error) {
      alert("update event error" + error.message);
    }
  };

  const onDeleteEvent = async (id) => {
    try {
      await deleteEvent(id);
      navigate(PATH_EVENT);
    } catch (error) {
      alert("delete room failed");
    }
  };
  const onFetchEvent = async (id) => {
    try {
      const { data } = await fetchEvent(id);
      if (data) {
        setEventName(data.eventName);
        setDescription(data.description);
        setImageURL(data.imageURL);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    if (id) {
      onFetchEvent(id);
    }
  }, [id]);
  return (
    <>
      <Adminbar />
      <section className="promo-page">
        <div className="promo-main">
          <div className="promo-left-layout">
            <div className="promo-num-type-top">
              <p>Event name :</p>
              <input
                className="Entry-type"
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                id="type"
                name="type"
                required
              />
            </div>
            <div>
              <p>
                <input
                  type="file"
                  width="300"
                  height="300"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </p>
            </div>

            <div className="promo-info">
              <p>INFO :</p>
              <textarea
                className="Entry-comments"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder
                rows="9"
              ></textarea>
            </div>
          </div>
          <div className="promo-right-layout">
            {id && !hideImage && (
              <>
                <div className="promo-img">
                  <p>
                    <input
                      type="image"
                      id="image"
                      src={imageURL}
                      width="120"
                      height="120"
                    />
                  </p>
                </div>

                <div className="add-modif-btn">
                  <button
                    className="btn-del-promo"
                    onClick={() => onDeleteImage()}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="promo-bottom-layout">
          <div className="btn-under">
            {id ? (
              <button className="btn-add-promo" onClick={() => onEditEvent(id)}>
                Edit
              </button>
            ) : (
              <button className="btn-add-promo" onClick={() => onCreateEvent()}>
                Add
              </button>
            )}

            {id && (
              <button onClick={() => onDeleteEvent(id)}>delete event</button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Adminpromo;
