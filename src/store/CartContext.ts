import { createContext } from "react";
import { Fruit } from "../types/Fruit";

export interface CartItem {
  fruit: Fruit;
  count: number;
}

export interface Offer {
  id: string;
  name: string;
  itemID: string;
  active: boolean;
  activation: (price: number, totalPrice: number) => number;
}

const CartContext = createContext({
  items: [] as CartItem[],
  totalAmount: 0,
  offers: [] as Offer[],
  addItem: (item: CartItem) => {},
  removeItem: (id: string) => {},
  toggleOffer: (id: string, checked: boolean) => {},
});

export default CartContext;
