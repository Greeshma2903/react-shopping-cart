import React, { useState } from "react";

// Context API
const CartContext = React.createContext({
  addItemCart: () => {},
  removeItemCart: () => {},
  items: [],
  totalAmount: 0,
});

const defaultCart = {
  items: [],
  totalAmount: 0,
};

// Context Provider
export const CartContextProvider = (props) => {
  const [updatedCart, setUpdatedCart] = useState({ ...defaultCart });

  const addItemCartHandler = (item) => {
    const indexToUpdateItem = updatedCart.items.findIndex(
      (existingItem) => existingItem.id === item.id
    );

    setUpdatedCart((prev) => {
      const existingItems = [...prev.items];
      let updatedItem;
      // if an exisiting order needs to update
      if (indexToUpdateItem !== -1) {
        updatedItem = {
          ...existingItems[indexToUpdateItem],
          quantity: item.quantity,
          amount: item.price * item.quantity,
        };
        existingItems[indexToUpdateItem] = updatedItem;
      } else {
        // add a new one
        existingItems.push({ ...item, amount: item.price * item.quantity });
      }
      // total amount
      const amountChange = existingItems.reduce(
        (acc, item) => acc + item.amount,
        0
      );

      return {
        items: existingItems,
        totalAmount: amountChange,
      };
    });

    console.log(updatedCart);
  };

  const removeItemCartHandler = (id) => {
    const indexToUpdateItem = updatedCart.items.findIndex(
      (existingItem) => existingItem.id === id
    );

    setUpdatedCart((prev) => {
      const existingItems = [...prev.items];

      if (existingItems.length === 0) return defaultCart;

      let updatedItems;
      const existingItem = existingItems[indexToUpdateItem];

      if (existingItem.quantity === 1) {
        updatedItems = existingItems.filter((item) => item.id !== id);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
          amount: (existingItem.quantity - 1) * existingItem.price,
        };
        updatedItems = [...prev.items];
        updatedItems[indexToUpdateItem] = updatedItem;
      }

      // total amount
      const amountChange = updatedItems.reduce(
        (acc, item) => acc + item.amount,
        0
      );

      return {
        items: updatedItems,
        totalAmount: amountChange,
      };
    });
  };

  const ContextValue = {
    addItemCart: addItemCartHandler,
    removeItemCart: removeItemCartHandler,
    items: updatedCart.items,
    totalAmount: updatedCart.totalAmount,
  };

  return (
    <CartContext.Provider value={ContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
