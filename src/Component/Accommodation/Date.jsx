import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Date() {
  return (
    <div className="section__container header__container">
      <div className="header__image__container">
        <div className="header__content">
          <h1>Saengthong Beach Resort</h1>
          <p>Enjoy Your Stay To The Fullest Extent.</p>
        </div>
        <div className="booking__container">
          <form>
            <div className="form__group">
              <div className="input__group">
                <input type="date" />
                <label>Check In</label>
              </div>
              <p>Add date</p>
            </div>
            <div className="form__group">
              <div className="input__group">
                <input type="date" />
                <label>Check Out</label>
              </div>
              <p>Add date</p>
            </div>
            <div className="form__group">
              <div className="input__group">
                <input type="number" />
                <label>Guests</label>
              </div>
              <p>Add guests</p>
            </div>
          </form>
          <button className="btn-date">
           <div className="bb">
             <FontAwesomeIcon icon={faMagnifyingGlass} />
           </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Date;
