import { useState } from "react";
import { useContext } from "react";
import CartContext from "../AppContext";

const CartItem = ({ item }) => {
  const [inputVal, setInputVal] = useState(item.quantity);
  const cartContext = useContext(CartContext);

  const increment = (item) => {
    if (inputVal < 10) {
      setInputVal((prev) => prev + 1);
      cartContext.dispatch({
        type: "UPDATE_QUTY",
        payload: { id: item.id, quantity: inputVal + 1 },
      });
    }
  };

  const decrement = (item) => {
    if (inputVal > 1) {
      setInputVal((prev) => prev - 1);
      cartContext.dispatch({
        type: "UPDATE_QUTY",
        payload: { id: item.id, quantity: inputVal - 1 },
      });
    }
  };

  const deleteItem = (item) => {
    cartContext.dispatch({
      type: "REMOVE",
      payload: item.id,
    });
  };

  return (
    <li className="row cart-item-wrap">
      <div className="col-md-4">{item.name}</div>
      <div className="col-md-4">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button
              onClick={decrement.bind(this, item)}
              className="btn btn-outline-secondary"
              type="button"
            >
              -
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            disabled
            value={item.quantity}
          />
          <div className="input-group-append">
            <button
              onClick={increment.bind(this, item)}
              className="btn btn-outline-secondary ml-3"
              type="button"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        Rs. {item.price * item.quantity}
        <button
          className="btn btn-outline-secondary"
          onClick={deleteItem.bind(this, item)}
        >
          x
        </button>
      </div>
    </li>
  );
};

export default CartItem;
