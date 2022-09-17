const CartItem = (props) => {
  return (
    <li>
      <div className="flex items-center space-x-3 font-bold">
        <div className="item__price text-2xl text-red-500 flex flex-col items-center">
          <span className="spn">price</span>$ {props.price}
        </div>
        <h3 className="text-xl">{props.itemName}</h3>
      </div>
      <div className="flex space-x-3 items-center">
        <Counter
          id={props.id}
          onQtyChange={amtQuantityChangeHandler}
          quantity={qty}
        />  
      </div>
    </li>
  );
};

export default CartItem;
