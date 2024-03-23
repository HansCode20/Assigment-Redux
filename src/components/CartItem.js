import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseItemAmount,
  increaseItemAmount,
  removeFromCart
} from "../features/cart/cartSlice";
import { ChevronDown, ChevronUp } from "../icons";
const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  const handleIncreaseAmount = () => {
    dispatch(increaseItemAmount(id));
  };

  const handleDecreaseAmount = () => {
    if (amount >= 1) {
      dispatch(decreaseItemAmount(id));
    }else{
      return 0
    }
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(id));
  };
    return (
      <article className="cart-item">
        {amount != 0 ?
        <>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={handleRemoveItem}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={handleIncreaseAmount}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={handleDecreaseAmount}>
          <ChevronDown />
        </button>
      </div>

        </> : null}
    </article>
  );
}
  

export default CartItem;
