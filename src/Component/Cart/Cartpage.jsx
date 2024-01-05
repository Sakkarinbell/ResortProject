import { useState } from "react";
import { CART } from "../../utils/constants/storage";
import { getData, saveData } from "../../utils/localStorageService";
import Navbar from "../Navbar";
import Cart from "./Cart";

function Cartpage() {
  const [carts, setCarts] = useState(JSON.parse(getData(CART)) || []);
  const removeOrder = (id) => {
    const newCarts = carts?.filter((order) => order.id !== id);
    setCarts(newCarts);
    saveData(CART, JSON.stringify(newCarts));
  };
  console.log("env", import.meta.env.VITE_BACKEND);
  return (
    <>
      <Navbar />
      {!carts && (
        <div>
          <h1 className="noroom">ไม่พบรายการห้องพัก</h1>
        </div>
      )}
      {carts && <Cart carts={carts} onRemove={removeOrder} />}
    </>
  );
}
export default Cartpage;
