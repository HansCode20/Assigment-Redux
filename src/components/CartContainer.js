import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../features/cart/cartSlice";
import { totalPrice } from "../features/cart/cartSlice";
const CartContainer = () => {
  const cartItemsData = useSelector((state)=>state.cart.cartItems);
  const dispatch = useDispatch();
  const total = useSelector((state) => state.cart.total);
  const setTotalPrices = () =>{
    dispatch(totalPrice())
  }
  useEffect(()=>{
    setTotalPrices()
  },[cartItemsData])
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
        {total !=0 ?
        <>
      <div>
         <div>
        {cartItemsData.map((item) => (
          <div  key={item.id}>
          <CartItem {...item} /> 
          </div>
          ))}
          </div>

      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
              </>
              :
              <h4 className="empty-cart">Its currently empty</h4>
              }
    </section>
  );
};

export default CartContainer;
