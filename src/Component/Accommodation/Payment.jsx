import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="paydiv">
        <button className="root1" onClick={() => navigate("/Qrcode")}>
          PayPal
        </button>
        <button className="root2" onClick={() => navigate("/Qrcode")}>
          Kasikorn Bank
        </button>
        <button className="root3" onClick={() => navigate("/Qrcode")}>
          Truemoney Wallet
        </button>
      </div>
    </>
  );
}
export default Payment;
