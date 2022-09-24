import { createContext } from "react";
import { Fruit } from "../types/Fruit";

export interface CartItem {
  fruit: Fruit;
  amount: number;
}

const CartContext = createContext({
  items: [] as CartItem[],
  totalAmount: 0,
  add: (item: CartItem) => {},
  remove: (id: string) => {},
});

export default CartContext;
