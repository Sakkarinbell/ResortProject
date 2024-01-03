import Adminbar from "./Headeradmin";

function Adminpromo() {
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
                onChange={(e) => setImg(e.target.files[0])}
              />
            </p>
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
              
              <button className="btn-del-promo">Delete</button>
            </div>
          </div>
        </div>
        <div className="promo-bottom-layout">
          <div className="btn-under">
            <button className="btn-add-promo">Add</button>
           
          </div>
         
        </div>
      </section>
    </>
  );
}

export default Adminpromo;
