import React, { useState, useReducer } from "react";

// Context API
const CartContext = React.createContext({
  addItemCart: () => {},
  removeItemCart: () => {},
  makeOrder: () => {},
  items: [],
  totalAmount: 0,
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingItems = [...state.items];
      const indexOfItemUpdate = state.items.findIndex(
        (existingItem) => existingItem.id === action.item.id
      );
      let updatedItem;

      if (indexOfItemUpdate !== -1) {
        // if an exisiting order needs to update
        updatedItem = {
          ...existingItems[indexOfItemUpdate],
          quantity: action.item.quantity,
          amount: action.item.price * action.item.quantity,
        };
        existingItems[indexOfItemUpdate] = updatedItem;
      } else {
        // add a new one
        existingItems.push({
          ...action.item,
          amount: action.item.price * action.item.quantity,
        });
      }
      // total amount
      const amountAddCart = existingItems.reduce(
        (acc, item) => acc + item.amount,
        0
      );

      return {
        items: existingItems,
        totalAmount: amountAddCart,
      };

    case "REMOVE":
      const indexItemRemove = state.items.findIndex(
        (existingItem) => existingItem.id === action.id
      );
      const existingCartItems = [...state.items];
      const existingItem = existingCartItems[indexItemRemove];
      let updatedItems;
      if (existingItem.quantity === 1) {
        updatedItems = existingCartItems.filter(
          (item) => item.id !== action.id
        );
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
          amount: (existingItem.quantity - 1) * existingItem.price,
        };
        updatedItems = [...state.items];
        updatedItems[indexItemRemove] = updatedItem;
      }

      // total amount
      const amountRemoveCart = updatedItems.reduce(
        (acc, item) => acc + item.amount,
        0
      );

      return {
        items: updatedItems,
        totalAmount: amountRemoveCart,
      };

    case "ORDER":
      console.log("Your order has been placed!");
      return defaultCartState;

    default:
      console.error("Invalid action on Cart, either Add or Remove items.");
      break;
  }
  return defaultCartState;
};

// Context Provider
export const CartContextProvider = (props) => {
  const [updatedCart, dispatchUpdatedCart] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemCartHandler = (item) => {
    dispatchUpdatedCart({ type: "ADD", item: item });
  };

  const removeItemCartHandler = (id) => {
    dispatchUpdatedCart({ type: "REMOVE", id: id });
  };

  const makeOrderHandler = () => {
    dispatchUpdatedCart({ type: "ORDER" });
  };

  const ContextValue = {
    addItemCart: addItemCartHandler,
    removeItemCart: removeItemCartHandler,
    items: updatedCart.items,
    totalAmount: updatedCart.totalAmount,
    makeOrder: makeOrderHandler,
  };

  return (
    <CartContext.Provider value={ContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
