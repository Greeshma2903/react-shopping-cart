import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Modal>
      <ul>
        {[
          { id: "o1", dishName: "Cheese Burger", quantity: 1, price: 12.0 },
        ].map((item) => {
          <CartItem key={item.id} orderItem={item} />;
        })}
      </ul>
      <div className="flex justify-between items-center">
        <h3>Total: </h3>
        <h3 className="text-lg text-amber-700">100</h3>
      </div>
    </Modal>
  );
};

export default Cart;
