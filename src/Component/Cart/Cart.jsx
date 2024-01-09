import PropType from "prop-types";
import { useMemo } from "react";
import axios from "axios";
import { saveBookings } from "../../utils/firestores/bookingCollection";
import { PENDING } from "../../utils/constants/status";
import { v4 } from "uuid";
function Cart({ carts, onRemove }) {
  const totalPrice = useMemo(() => {
    const total = carts?.reduce(
      (prev, cur) => prev + cur.price * cur.totalRoom * cur.amountDay,
      0
    );
    return total;
  }, [carts]);

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
  const formatDate = (date) => {
    if (!date) return "-";
    const [year, month, day] = date.split("-");
    return `${month}-${day}-${year}`;
  };
  return (
    <div className="page-content">
      <div className="holder mt-0">
        <div className="container">
          <h1 className="text-center">Your Cart</h1>
          <div className="rowcart">
            <div className="col-md-8">
              <div className="cart-table">
                {carts?.map((cart) => (
                  <div className="cart-table-prd" key={cart.id}>
                    <div className="cart-table-prd-image">
                      <a>
                        <img
                          src={cart?.coverImage || "/icon.png"}
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="cart-table-prd-name">
                      <h5>
                        <a>Check In - {formatDate(cart.checkIn)}</a>
                      </h5>
                      <h5>
                        <a>Check Out - {formatDate(cart.checkOut)}</a>
                      </h5>
                      <h2>
                        <a>{cart?.roomName}</a>
                      </h2>
                    </div>
                    <div className="cart-table-prd-qty">
                      <span>qty:</span> <b>{cart?.totalRoom}</b>
                    </div>
                    <div className="cart-table-prd-price">
                      <span>price:</span>{" "}
                      <b>฿ {cart?.price * cart?.totalRoom * cart?.amountDay}</b>
                    </div>
                    <div className="cart-table-prd-action">
                      <button
                        className="removecart"
                        onClick={() => onRemove(cart.id)}
                      >
                        {" "}
                        x{" "}
                      </button>
                      <a className="fa fa-trash" aria-hidden="true"></a>{" "}
                      <a className="fa fa-pencil" aria-hidden="true"></a>
                    </div>
                  </div>
                ))}
                <div className="totalform">
                  <div className="totalcart">
                    <h4 className="text-total">Total price : </h4>
                    <h4 className="text-total2">{totalPrice}</h4>
                  </div>
                  <button className="btn-cart" onClick={onCheckout}>
                    BOOKING
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
  onRemove: PropType.func,
};
export default Cart;
