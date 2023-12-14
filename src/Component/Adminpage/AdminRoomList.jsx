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
          <th className="roomname">Total room</th>
          <th className="roomname">Price</th>
          <th className="roomname">Discount</th>
          <th className="roomname">Modify</th>
        </tr>
        {rooms.map((room) => (
          <tr key={room.id}>
            <td className="roomname100">{room.name}</td>
            <td className="roomname1">{room.totalRoom}</td>
            <td className="roomname1">{room.price}</td>
            <td className="roomname1">{room.priceSale}</td>
            <th className="roomname">
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
