function Cart() {
  return (
    <div className="page-content">
      <div className="holder mt-0">
        <div className="container">
          <h1 className="text-center">Your Cart</h1>
          <div className="row">
            <div className="col-md-8">
              <div className="cart-table">
                <div className="cart-table-prd">
                  <div className="cart-table-prd-image">
                    <a href="#">
                      <img src="picture/ex.jpg" className="img-fluid" alt="" />
                    </a>
                  </div>
                  <div className="cart-table-prd-name">
                    <h5>
                      <a href="#">15 oct, 2022</a>
                    </h5>
                    <h2>
                      <a href="#">Superior Bungalow</a>
                    </h2>
                  </div>
                  <div className="cart-table-prd-qty">
                    <span>qty:</span> <b>1</b>
                  </div>
                  <div className="cart-table-prd-price">
                    <span>price:</span> <b>฿ 1000</b>
                  </div>
                  <div className="cart-table-prd-action">
                    {" "}
                    <a
                      href="#"
                      className="fa fa-trash"
                      aria-hidden="true"
                    ></a>{" "}
                    <a href="#" className="fa fa-pencil" aria-hidden="true"></a>
                  </div>
                </div>
                <div className="cart-table-prd">
                  <div className="cart-table-prd-image">
                    <a href="#">
                      <img src="picture/ex.jpg" className="img-fluid" alt="" />
                    </a>
                  </div>
                  <div className="cart-table-prd-name">
                    <h5>
                      <a href="#">15 oct, 2022</a>
                    </h5>
                    <h2>
                      <a href="#">Bungalow</a>
                    </h2>
                  </div>
                  <div className="cart-table-prd-qty">
                    <span>qty:</span> <b>1</b>
                  </div>
                  <div className="cart-table-prd-price">
                    <span>price:</span> <b>฿ 700</b>
                  </div>
                  <div className="cart-table-prd-action">
                    {" "}
                    <a
                      href="#"
                      className="fa fa-trash"
                      aria-hidden="true"
                    ></a>{" "}
                    <a href="#" className="fa fa-pencil" aria-hidden="true"></a>
                  </div>
                </div>
                <div className="cart-table-prd">
                  <div className="cart-table-prd-image">
                    <a href="#">
                      <img src="picture/ex.jpg" className="img-fluid" alt="" />
                    </a>
                  </div>
                  <div className="cart-table-prd-name">
                    <h5>
                      <a href="#">15 oct, 2022</a>
                    </h5>
                    <h2>
                      <a href="#">Two-Bedroom Bungalow</a>
                    </h2>
                  </div>
                  <div className="cart-table-prd-qty">
                    <span>qty:</span> <b>1</b>
                  </div>
                  <div className="cart-table-prd-price">
                    <span>price:</span> <b>฿ 1800</b>
                  </div>
                  <div className="cart-table-prd-action">
                    {" "}
                    <a
                      href="#"
                      className="fa fa-trash"
                      aria-hidden="true"
                    ></a>{" "}
                    <a href="#" className="fa fa-pencil" aria-hidden="true"></a>
                  </div>
                </div>
                <div className="totalform">
                  <h4 className="text-total">Total price</h4>
                  <a href="#" className="btn-cart">
                    Check Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
