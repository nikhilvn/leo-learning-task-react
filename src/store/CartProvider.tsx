import { Reducer, useReducer } from "react";
import CartContext, { CartItem } from "./CartContext";

interface CartProviderProps {
  children: React.ReactNode;
}

const initialCart = {
  items: [] as CartItem[],
  totalAmount: 0,
};

type CartAction =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; id: string };

const cartReducer: Reducer<typeof initialCart, CartAction> = (
  state,
  action
) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.fruit.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.fruit.id === action.item.fruit.id
    );
    const existingItem = state.items[existingItemIndex];

    let updateItems: CartItem[];

    if (existingItem) {
      const updatedItem: CartItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingItemIndex] = updatedItem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.fruit.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.fruit.price;

    let updatedItems: CartItem[];
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.fruit.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return state;
};

const CartProvider: React.FunctionComponent<CartProviderProps> = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialCart);

  function addItem(item: CartItem) {
    dispatchCart({
      type: "ADD_ITEM",
      item,
    });
  }

  function removetem(id: string) {
    dispatchCart({
      type: "REMOVE_ITEM",
      id,
    });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    add: addItem,
    remove: removetem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
