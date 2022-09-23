import Button from "../UI/Button";
import Input from "../UI/Input";

const CartItem = (props) => {
  const item = { ...props.orderItem };

  return (
    <li className="border-b-2 border-b-slate-300 flex justify justify-between items-center py-3 font-bold">
      <h3 className="text-xl text-slate-900">{item.itemName}</h3>

      <div className="flex space-x-3 items-center">
        <p className="item__price text-2xl text-red-500">$ {item.price}</p>
        <p className="text-slate-900 text-lg bg-yellow-100 px-3 rounded">
          <span className="text-slate-400 pr-3">x</span>
          {item.quantity}
        </p>

        {/* qty action buttons */}
        <div className="flex items-center text-xl font-bold text-slate-900">
          <Button
            className="px-2 mx-1 border-2 border-yellow-100 rounded place-content-center focus:bg-yellow-50"
            onClick={props.onRemoveItem}
          >
            -
          </Button>
          <Button
            className="px-2 border-2 border-yellow-100 rounded place-content-center focus:bg-yellow-50"
            onClick={props.onAddItem}
          >
            +
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
