import Adminbar from "./Headeradmin";

function Adminstatusroom() {
  return (
    <>
      <Adminbar />
      <div>
        <table>
          <tr>
            <th className="roomname">NO.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Room</th>
            <th>Check in</th>
            <th>Check out</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>01</td>
            <td>Sakairn</td>
            <td>test@gmail.com</td>
            <td>010-000-0000</td>
            <td>----</td>
            <td>00/00/00</td>
            <td>00/00/00</td>
            <td>not paid</td>
          </tr>
        </table>
      </div>
    </>
  );
}
export default Adminstatusroom;
