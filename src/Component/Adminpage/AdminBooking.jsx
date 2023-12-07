import { useEffect, useState } from "react";
import Adminbar from "./Headeradmin";
import { fetchBookings } from "../../utils/firestores/bookingCollection";

function Adminstatusroom() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    onFetchBookings();
  }, []);

  const onFetchBookings = async () => {
    try {
      const { data } = await fetchBookings();
      if (data) {
        setBookings(data);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <Adminbar />
      <div>
        <table>
          <tr>
            <th className="roomname">NO.</th>
            <th>รหัสห้อง</th>
            <th>รหัสผู้ใช้งาน</th>
            <th>Phone number</th>
            <th>Check in</th>
            <th>Check out</th>
            <th>GUEST</th>
            <th>Status</th>
          </tr>
          {bookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.roomId}</td>
              <td>{booking.userId}</td>
              <td>{booking.phoneNumber}</td>
              <td>{booking.checkIn}</td>
              <td>{booking.checkOut}</td>
              <td>{booking.guest}</td>
              <td>{booking?.status}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
export default Adminstatusroom;
