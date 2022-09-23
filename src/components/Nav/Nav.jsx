import React from "react";
import CartButton from "./CartButton";

const Nav = (props) => {
  return (
    <React.Fragment>
      <div className="logo">
        <h1 className="text-3xl font-bold">fop</h1>
      </div>
      <ul className="hidden md:(flex justify-evenly space-x-12 text-lg font-medium)">
        <li>home</li>
        <li>categories</li>
        <li>contact</li>
      </ul>
    <CartButton onClick={props.showCart}/>      
    </React.Fragment>
  );
};  

export default Nav;
