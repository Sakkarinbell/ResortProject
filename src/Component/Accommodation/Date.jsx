import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { getData } from "../../utils/localStorageService";
import { CHECK_IN, CHECK_OUT, GUEST } from "../../utils/constants/storage";
import PropTypes from "prop-types";

function SearchRoom({ onSearch }) {
  const currentDate = new Date().toISOString().split('T')[0];
  const [checkIn, setCheckIn] = useState(getData(CHECK_IN));
  const [checkOut, setCheckOut] = useState(getData(CHECK_OUT));
  const [guest, setGuest] = useState(getData(GUEST) || 0);
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
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={currentDate}
                />
                <label>Check In</label>
              </div>
              <p>Add date</p>
            </div>
            <div className="form__group">
              <div className="input__group">
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || currentDate}
                />
                <label>Check Out</label>
              </div>
              <p>Add date</p>
            </div>
            <div className="form__group">
              <div className="input__group">
                <input
                  type="number"
                  value={guest}
                  onChange={(e) => setGuest(e.target.value)}
                />
                <label>Guests</label>
              </div>
              <p>Add guests</p>
            </div>
          </form>
          <button className="btn-date">
            <div className="bb">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                onClick={() => onSearch(checkIn, checkOut, guest)}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

SearchRoom.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchRoom;
