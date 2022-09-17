import Button from "../UI/Button";

const CartButton = () => {
    return (
        <Button className="btn-yellow">
        <span className="space-x-2 pr-2 flex">
          <p className="cart__count bg-white rounded px-2">0</p>
          <img src="src/assets/shopping-cart.svg" alt="cart icon" />
        </span>
        cart
      </Button>
    )
}

export default CartButton;