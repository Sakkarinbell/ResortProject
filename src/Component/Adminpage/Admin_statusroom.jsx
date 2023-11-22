import Adminbar from "./Headeradmin";

function Adminstatusroom() {
  return (
    <>
      <Adminbar />
      <section className="room-book-page">
        <div className="room-book-main">
          <table>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Room</th>
              <th>Check in</th>
              <th>Check out</th>
              <th>Phone number</th>
              <th>Confirm</th>
              <th>Status</th>
            </tr>
          </table>
        </div>
        <div className="room-bottom-layout">
          <div className="room-book-btn">
            <button className="btn-add">ADD</button>
            <button className="btn-modi">MODIFY</button>
            <button className="btn-del">DELETE</button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Adminstatusroom;
