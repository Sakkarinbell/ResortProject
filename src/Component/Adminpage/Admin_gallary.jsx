import Adminbar from "./Headeradmin";

function Admingallary() {
  return (
    <>
      <Adminbar />
      <section className="gal-page">
        <div className="gal-main">
          <div className="gal-left-layout">
            <div className="gal-num-type">
              <p>No :</p>
              <input
                className="Entry-number"
                type="number"
                id="no."
                name="no."
                required
              />
              <p>PICTURE TYPE :</p>
              <input
                className="Entry-type"
                type="text"
                id="type"
                name="type"
                required
              />
            </div>
            <div className="gal-img">
              <p>
                <input
                  type="image"
                  id="image"
                  src="image/img9.png"
                  width="300"
                  height="300"
                />
              </p>
              <p>
                <input
                  type="image"
                  id="image"
                  src="image/img9.png"
                  width="300"
                  height="300"
                />
              </p>
              <p>
                <input
                  type="image"
                  id="image"
                  src="image/img9.png"
                  width="300"
                  height="300"
                />
              </p>
              <p>
                <input
                  type="image"
                  id="image"
                  src="image/img9.png"
                  width="300"
                  height="300"
                />
              </p>
            </div>
            <div className="add-modif-btn">
              <button className="btn-add-pic">ADD</button>
              <button className="btn-del-pic">DELETE</button>
            </div>
          </div>
        </div>
        <div className="gal-bottom-layout">
          <div className="gal-num-type">
            <p>No :</p>
            <input
              className="Entry-number"
              type="number"
              id="no."
              name="no."
              required
            />
            <p>GALLERY TYPE :</p>
            <input
              className="Entry-type"
              type="text"
              id="type"
              name="type"
              required
            />
            <button className="btn-del-clear">DELETE</button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Admingallary;
