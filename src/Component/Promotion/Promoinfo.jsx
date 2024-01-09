import { useEffect, useState } from "react";
import { fetchEvents } from "../../utils/firestores/eventCollection";

function Promotioninfo() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    onFetchEvents();
  }, []);

  const onFetchEvents = async () => {
    try {
      const { data } = await fetchEvents();
      if (data) {
        setEvents(data);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="main-wrapper">
      <div className="container">
        {events.map((event) => (
          <>
            <div className="product-div">
              <div className="product-div-left">
                <div className="img-container">
                  <img
                  src={event.imageURL || "/icon.png"}
                    alt="watch"
                    width="150px"
                    height="400px"
                  />
                </div>
              </div>
              <div className="product-div-right">
                <span className="product-name">{event.eventName}</span>
                {/* <span className="product-price">Free</span> */}
                <p className="product-description">{event.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Promotioninfo;
