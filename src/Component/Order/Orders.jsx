import { useEffect, useMemo, useState } from "react";
import { fetchBookingUsers } from "../../utils/firestores/bookingCollection";
import Navbar from "../Navbar";
import { getData } from "../../utils/localStorageService";
import { UUID } from "../../utils/constants/storage";
function Orders() {
  const userId = useMemo(() => {
    return getData(UUID);
  }, []);

  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    onFetchBookings();
  }, []);

  const onFetchBookings = async () => {
    try {
      if (!userId) return;
      const { data } = await fetchBookingUsers(userId);
      if (data) {
        setBookings(data);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  if (!userId) {
    return <p>Page not found</p>;
  }
  return (
    <>
     
      <div>
        <table>
          <tr>
            <th>NO.</th>
            <th>Room ID</th>
            <th>User ID</th>
            <th>Phone number</th>
            <th>Check in</th>
            <th>Check out</th>
            <th className="guest">Guest</th>
            <th className="guest">Status</th>
          </tr>
          {bookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.roomId}</td>
              <td>{booking.userId}</td>
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
export default Orders;
