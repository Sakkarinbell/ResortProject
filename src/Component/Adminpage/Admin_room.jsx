import Adminbar from "./Headeradmin";

function Adminroom() {
  return (
    <>
      <Adminbar />
      <section className="room-page">
        <div className="room-main">
          <div className="room-left-layout">
            <div className="room-num-type">
              <p>No :</p>
              <input
                className="Entry-number"
                type="number"
                id="no."
                name="no."
                required
              />
              <p>ROOM TYPE :</p>
              <input
                className="Entry-type"
                type="text"
                id="type"
                name="type"
                required
              />
            </div>
            <div className="room-info">
              <p>Room Size :</p>
              <input
                className="Entry-info"
                type="text"
                id="type"
                name="type"
                required
              />
              <p>Bed size :</p>
              <input
                className="Entry-info"
                type="text"
                id="type"
                name="type"
                required
              />
              <p>Free WiFi :</p>
              <input
                className="Entry-info"
                type="text"
                id="type"
                name="type"
                required
              />
              <p>Free Breakfast :</p>
              <input
                className="Entry-info"
                type="text"
                id="type"
                name="type"
                required
              />
            </div>
          </div>
          <div className="room-right-layout">
            <div className="room-img">
              <p>
                <input
                  type="image"
                  id="image"
                  src="image/img9.png"
                  width="120"
                  height="120"
                />
              </p>
              <p>
                <input
                  type="image"
                  id="image"
                  src="image/img9.png"
                  width="120"
                  height="120"
                />
              </p>
              <p>
                <input
                  type="image"
                  id="image"
                  src="image/img9.png"
                  width="120"
                  height="120"
                />
              </p>
            </div>
            <div className="room-img">
              <p>
                <input
                  type="image"
                  id="image"
                  src="image/img9.png"
                  width="120"
                  height="120"
                />
              </p>
              <p>
                <input
                  type="image"
                  id="image"
                  src="image/img9.png"
                  width="120"
                  height="120"
                />
              </p>
              <p>
                <input
                  type="image"
                  id="image"
                  src="image/img9.png"
                  width="120"
                  height="120"
                />
              </p>
            </div>
            <div className="add-modif-btn">
              <button className="btn-add-pic">ADD</button>
              <button className="btn-del-pic">DELETE</button>
            </div>
          </div>
        </div>
        <div className="room-bottom-layout">
          <button className="btn-add-room">ADD</button>
          <button className="btn-modi-room">MODIFY</button>
          <div className="room-num-type">
            <p>No :</p>
            <input
              className="Entry-number"
              type="number"
              id="no."
              name="no."
              required
            />
            <p>ROOM TYPE :</p>
            <input
              className="Entry-type"
              type="text"
              id="type"
              name="type"
              required
            />
            <button className="btn-del-room">DELETE</button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Adminroom;
