import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchEvents } from "../../utils/firestores/eventCollection";
import Adminbar from "./Headeradmin";
import { PATH_EVENT } from "../../utils/constants/path";

function AdminEvents() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    onFetchEvent();
  }, []);

  const onFetchEvent = async () => {
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
    <>
      <Adminbar />
      <button className="create-btn" onClick={() => navigate(PATH_EVENT)}>
        Create
      </button>
      <div>
        <table>
          <tr>
            <th>NO.</th>
            <th>Pic</th>
            <th>event name</th>
            <th>description</th>
            <th>Action</th>
          </tr>
          {events.map((event, index) => (
            <tr key={event.id}>
              <td>{index + 1}</td>
              <td>
                <img src={event.imageURL || "/icon.png"} width="200px" height="100px" />
              </td>
              <td>{event.eventName}</td>
              <td>{event.description}</td>
              <td>
                <button className="detail-btn" onClick={() => navigate(`${PATH_EVENT}/${event.id}`)}>
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default AdminEvents;
