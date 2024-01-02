import { useEffect } from "react";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import { updateBooking } from "../../utils/firestores/bookingCollection";
import { PAYPAID } from "../../utils/constants/status";
import { removeData } from "../../utils/localStorageService";
import { CART } from "../../utils/constants/storage";

function Successed() {
  const { billId } = useParams();
  const onUpdateBooking = async (billId) => {
    await updateBooking(billId, PAYPAID);
    removeData(CART);
  };
  useEffect(() => {
    onUpdateBooking(billId);
  }, [billId]);
  return (
    <div>
      <Navbar />
      <p style={{ textAlign: "center" }}>Successed</p>
    </div>
  );
}

export default Successed;
