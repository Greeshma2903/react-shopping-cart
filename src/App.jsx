import ReactDOM from "react-dom";
import Nav from "./components/Nav/Nav";
import Menu from "./components/Menu/Menu";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import {CartContextProvider} from "./store/cart-context";

const App = () => {
  const navRoot = document.querySelector("#nav-root");
  const [showCartItems, setShowCartItems] = useState(false);

  const showCartModal = () => {
    // setShowCartItems((prev) => setShowCartItems(!prev));
    setShowCartItems(true)
  };

  const hideCartModal = () => {
    setShowCartItems(false);
  };

  return (
    <CartContextProvider>
      {showCartItems && <Cart hideCart={hideCartModal} />}
      {ReactDOM.createPortal(<Nav showCart={showCartModal} />, navRoot)}
      <h1 className="text-3xl font-bold text-center m-5">Menu</h1>
      <Menu />
    </CartContextProvider>
  );
};

export default App;
