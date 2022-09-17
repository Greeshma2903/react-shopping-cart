import { useState } from "react";
import MenuItemForm from "./MenuItemForm";

const MenuItem = (props) => {
  return (
    <li className="flex justify-between items-center bg-white px-8 py-4 text-slate-900 rounded">
      <div className="flex items-center space-x-3 font-bold">
        <div className="item__price text-2xl text-red-500 flex flex-col items-center">
          <span className="spn">price</span>$ {props.price}
        </div>
        <h3 className="text-xl">{props.itemName}</h3>
      </div>
      <MenuItemForm
        id={props.id}
      />
    </li>
  );
};

export default MenuItem;
