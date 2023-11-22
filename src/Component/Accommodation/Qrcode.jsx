import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

function Qrcode() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="qrdiv">
        <h2 className="headtime"> 04 : 59</h2>
        <img src="picture/qrcode.png" alt="" />
        <button className="btn-qrcode" onClick={() => navigate("/Accom")}>
          Cancel
        </button>
      </div>
    </>
  );
}
export default Qrcode;
