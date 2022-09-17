import { useRef} from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const MenuItemForm = (props) => {

  const qtyRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredQty = +qtyRef.current.value;

    // use context to forward it to cart component.
  };

  return (
    <form className="flex space-x-3 items-center" onSubmit={formSubmitHandler}>
      <Input
        label="qty"
        input={{
          id: "quantity_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: 1,
          className: "min-w-6 text-center text-lg h-8",
          required: true,
        }}
        ref={qtyRef}
      />
      <Button className="btn-yellow" type="submit">
        add
      </Button>
    </form>
  );
};

export default MenuItemForm;
