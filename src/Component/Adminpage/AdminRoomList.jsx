import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchRooms } from "../../utils/firestores/roomCollection";
import { PATH_ADMIN_ROOM } from "../../utils/constants/path";
import Adminbar from "./Headeradmin";

function AdminRoomList() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const onFetchRooms = async () => {
    const { data } = await fetchRooms();
    setRooms(data || []);
  };

  useEffect(() => {
    onFetchRooms();
  }, []);

  return (
    <div>
      <Adminbar />
      <button className="create-btn" onClick={() => navigate(PATH_ADMIN_ROOM)}>create</button>
      
      <table>
        <tr>
          <th className="roomname">Room name</th>
          <th>Total room</th>
          <th>Price</th>
          <th>Discount</th>
          <th>Modify</th>
        </tr>
        {rooms.map((room) => (
          <tr key={room.id}>
            <td className="roomname">{room.name}</td>
            <td>{room.totalRoom}</td>
            <td>{room.price}</td>
            <td>{room.priceSale}</td>
            <th>
              <button className="detail-btn" onClick={() => navigate(`/admin/room/${room.id}`)}>
                detail
              </button>
            </th>
          </tr>
        ))}
      </table>
      
    </div>
  );
}

export default AdminRoomList;
