import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { openModel } from "../redux/modelSlice";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  if (amount < 1)
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart"></h4>
        </header>
      </section>
    );
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(openModel())}
          >
            Clear Cart
          </button>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
