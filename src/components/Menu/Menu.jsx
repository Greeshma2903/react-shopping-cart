import MenuItem from "./MenuItem";

const MENU_ITEMS = [
  { id: "m1", dishName: "Cheese Burger", price: 12.0 },
  { id: "m2", dishName: "Cheese Pasta", price: 10.0 },
  { id: "m3", dishName: "Chilly Cheese Pizza", price: 22.0 },
];

const Menu = () => {
  return (
    <ul className="flex flex-col mx-2 md:(mx-auto w-1/2) my-0 space-y-6">
      {MENU_ITEMS.map((item) => {
        return (
          <MenuItem key={item.id} id={item.id} price={item.price} itemName={item.dishName} />
        );
      })}
    </ul>
  );
};

export default Menu;
