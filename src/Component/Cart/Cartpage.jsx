import { CART } from "../../utils/constants/storage";
import { getData } from "../../utils/localStorageService";
import Navbar from "../Navbar";
import Cart from "./Cart";

function Cartpage() {
  const carts = getData(CART);
  return (
    <>
      <Navbar />
      {!carts && (
        <div>
          <h1>ไม่พบรายการห้องพัก</h1>
        </div>
      )}
      {carts && <Cart carts={JSON.parse(carts)} />}
    </>
  );
}
export default Cartpage;
