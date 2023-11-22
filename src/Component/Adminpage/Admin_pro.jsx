import Adminbar from "./Headeradmin";

function Adminpromo() {
  return (
    <>
      <Adminbar />
      <section className="promo-page">
        <div className="promo-main">
          <div className="promo-left-layout">
            <div className="promo-num-type-top">
              <p>No :</p>
              <input
                className="Entry-number"
                type="number"
                id="no."
                name="no."
                required
              />
              <p>PROMO NAME :</p>
              <input
                className="Entry-type"
                type="text"
                id="type"
                name="type"
                required
              />
            </div>
            <div className="promo-time">
              <p>START :</p>
              <input type="date" id="start" name="start" required />
              <p>END :</p>
              <input type="date" id="end" name="end" required />
            </div>
            <div className="promo-info">
              <p>INFO :</p>
              <textarea
                className="Entry-comments"
                placeholder
                rows="9"
              ></textarea>
            </div>
          </div>
          <div className="promo-right-layout">
            <div className="promo-img">
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
            <div className="promo-img">
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
        <div className="promo-bottom-layout">
          <div className="btn-under">
            <button className="btn-add-promo">ADD</button>
            <button className="btn-modi-promo">MODIFY</button>
          </div>
          <div className="promo-num-type">
            <p>No :</p>
            <input
              className="Entry-number"
              type="number"
              id="no."
              name="no."
              required
            />
            <p>PROMO NAME :</p>
            <input
              className="Entry-type"
              type="text"
              id="type"
              name="type"
              required
            />
            <button className="btn-del-promo">DELETE</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Adminpromo;
