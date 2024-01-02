import PropType from "prop-types";
import { useMemo } from "react";
import axios from "axios";
import { saveBookings } from "../../utils/firestores/bookingCollection";
import { PENDING } from "../../utils/constants/status";
import { v4 } from "uuid";
function Cart({ carts }) {
  const totalPrice = useMemo(() => {
    const total = carts?.reduce(
      (prev, cur) => prev + cur.price * cur.totalRoom,
      0
    );
    return total;
  }, []);
  const onCheckout = async () => {
    try {
      const billId = v4();
      for (let index = 0; index < carts.length; index++) {
        const room = carts[index];
        await saveBookings(
          room.userId,
          room.id,
          room.checkIn,
          room.checkOut,
          room.guest,
          room.price,
          room.totalRoom,
          PENDING,
          billId
        );
      }
      const resp = await axios.post(
        "http://localhost:3000/create-checkout-session",
        { orders: carts, billId }
      );

      if (resp.data.url) {
        window.location.href = resp.data.url;
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="page-content">
      <div className="holder mt-0">
        <div className="container">
          <h1 className="text-center">Your Cart</h1>
          <div className="row">
            <div className="col-md-8">
              <div className="cart-table">
                {carts?.map((cart) => (
                  <div className="cart-table-prd" key={cart.id}>
                    <div className="cart-table-prd-image">
                      <a>
                        <img
                          src={cart?.coverImage}
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="cart-table-prd-name">
                      <h5>
                        <a>
                          {cart?.checkIn} -- {cart?.checkOut}
                        </a>
                      </h5>
                      <h2>
                        <a>{cart?.roomName}</a>
                      </h2>
                    </div>
                    <div className="cart-table-prd-qty">
                      <span>qty:</span> <b>{cart?.totalRoom}</b>
                    </div>
                    <div className="cart-table-prd-price">
                      <span>price:</span> <b>฿ {cart?.price}</b>
                    </div>
                    <div className="cart-table-prd-action">
                      {" "}
                      <a className="fa fa-trash" aria-hidden="true"></a>{" "}
                      <a className="fa fa-pencil" aria-hidden="true"></a>
                    </div>
                  </div>
                ))}
                <div className="totalform">
                  <h4 className="text-total">Total price {totalPrice}</h4>
                  <button className="btn-cart" onClick={onCheckout}>
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Cart.propTypes = {
  carts: PropType.array,
};
export default Cart;
