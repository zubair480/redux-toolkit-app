import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { calculateTotals, getCartItems } from "./redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Model from "./components/Model";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Model />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
