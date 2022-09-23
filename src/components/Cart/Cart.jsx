import { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    item.quantity += 1;
    cartCtx.addItemCart(item);
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItemCart(id);
  };
  const orderItemsHandler = () => {
    cartCtx.makeOrder();
  }

  const cartItems = (
    <ul className="space-y-4 my-2">
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            orderItem={item}
            onAddItem={cartItemAddHandler.bind(null, item)}
            onRemoveItem={cartItemRemoveHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal>
      <div className="header flex justify-between">
        <h2 className="text-2xl font-bold text-amber-500">Cart Items</h2>
        <Button onClick={props.hideCart}>
          <img src="src/assets/x.svg" alt="close cart items list" />
        </Button>
      </div>
      {/* cart items */}
      {cartItems}
      {/* cart total */}
      <div className="flex justify-between items-center font-bold text-3xl text-slate-900">
        <h3 className="">Total: </h3>
        <h3 className="">{totalAmount}</h3>
      </div>
      {/* action buttons */}
      <div className="flex justify-center space-x-8">
        <Button
          onClick={props.hideCart}
          className="btn-pad px-3 py-2 text-red-500 border-2 border-red-500  font-bold hover:(bg-red-700 text-white)"
        >
          close
        </Button>
        {hasItems && (
          <Button className="btn-pad bg-red-500 font-bold hover:(bg-red-700 text-white)" onClick={orderItemsHandler}>
            order
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
