import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { closeModel } from "../redux/modelSlice";

const Model = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items form your shopping cart</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            type="button"
            onClick={async () => {
              await dispatch(clearCart());
              await dispatch(closeModel());
            }}
          >
            confirm
          </button>
          <button
            className="btn clear-btn"
            type="button"
            onClick={() => dispatch(closeModel())}
          >
            clear
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Model;
