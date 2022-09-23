import MenuItemForm from "./MenuItemForm";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const MenuItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (quantity) => {
    cartCtx.addItemCart({...props, quantity})
  };

  return (
    <li className="flex justify-between items-center bg-white px-8 py-4 text-slate-900 rounded">
      <div className="flex items-center space-x-3 font-bold">
        <p className="item__price text-2xl text-red-500 flex flex-col items-center">
          <span className="spn">price</span>$ {props.price}
        </p>
        <h3 className="text-xl">{props.itemName}</h3>
      </div>
      <MenuItemForm id={props.id} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MenuItem;
