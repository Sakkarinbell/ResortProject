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
            <th>NO.</th>
            <th>Room Name</th>
            <th>User </th>
            <th>Phone number</th>
            <th>Check in</th>
            <th>Check out</th>
            <th className="guest">Guest</th>
            <th className="guest">Status</th>
          </tr>
          {bookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.room.name}</td>
              <td>
                {booking.user.firstName} {booking.user.lastName}
              </td>
              <td>{booking.phoneNumber}</td>
              <td>{booking.checkIn}</td>
              <td>{booking.checkOut}</td>
              <td className="guest">{booking.guest}</td>
              <td className="guest">{booking?.status}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
export default Adminstatusroom;
