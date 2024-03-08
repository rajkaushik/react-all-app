import { useContext } from "react";
import CartContext from "../AppContext";
import CartItem from "./CartItem";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const totalPrice = cartContext.cartState.reduce((cum, cur) => {
    return cum + cur.price * cur.quantity;
  }, 0);

  const GST = (totalPrice * 5) / 100;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <h6>Items in the Cart </h6>
          <hr />
          <ul className="cart-item">
            {cartContext.cartState?.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
          </ul>
          <div className="row underline">
            <div className="col-md-4">Total Amount</div>
            <div className="col-md-4">{totalPrice}</div>
          </div>
          <div className="row underline">
            <div className="col-md-4">GST@5%</div>
            <div className="col-md-4">{GST}</div>
          </div>
          <div className="row underline">
            <div className="col-md-4">Amount to be paid</div>
            <div className="col-md-4">{totalPrice + GST}</div>
          </div>
          <div className="row underline">
            <div className="col-md-4 mt-3">
              <button className="btn btn-primary btn-sm">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
