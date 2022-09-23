import Button from "../UI/Button";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
  const countCtx = useContext(CartContext);
  const numberCartItems = countCtx.items.length;

  return (
    <Button className="btn-yellow btn-pad" onClick={props.onClick}>
      <span className="space-x-2 pr-2 flex">
        <p className="cart__count bg-white rounded px-2">{numberCartItems}</p>
        <img src="src/assets/shopping-cart.svg" alt="cart icon" />
      </span>
      cart
    </Button>
  );
};

export default CartButton;
