import { Reducer, useReducer } from "react";
import CartContext, { CartItem, Offer } from "./CartContext";

interface CartProviderProps {
  children: React.ReactNode;
}

const initialCart = {
  items: [] as CartItem[],
  totalAmount: 0,
  offers: [
    {
      id: "buyOneGetOneApples",
      name: "Buy one, get one free on Apples",
      itemID: "f1",
      active: false,
      activation: (price: number, totalPrice: number) => {
        const amount = totalPrice / price;
        const newTotalPrice = Math.ceil(amount / 2) * price;
        return newTotalPrice;
      },
    },
    {
      id: "threeForThePriceTwoOranges",
      name: "Three for the price of two on Oranges",
      itemID: "f2",
      active: false,
      activation: (price: number, totalPrice: number) => {
        const amount = totalPrice / price;
        const newTotalPrice = Math.ceil(amount * (2 / 3)) * price;
        return newTotalPrice;
      },
    },
  ] as Offer[],
};

type CartAction =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; id: string }
  | { type: "TOGGLE_OFFER"; payload: { id: string; checked: boolean } };

const cartReducer: Reducer<typeof initialCart, CartAction> = (
  state,
  action
) => {
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.fruit.id === action.item.fruit.id
    );
    const existingItem = state.items[existingItemIndex];

    let updatedItems: CartItem[];

    if (existingItem) {
      const updatedItem: CartItem = {
        ...existingItem,
        count: existingItem.count + action.item.count,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount = calculateTotalAmount(updatedItems, state.offers);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      offers: state.offers,
    };
  } else if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.fruit.id === action.id
    );
    const existingItem = state.items[existingItemIndex];

    let updatedItems: CartItem[];
    if (existingItem.count === 1) {
      updatedItems = state.items.filter((item) => item.fruit.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        count: existingItem.count - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    const updatedTotalAmount = calculateTotalAmount(updatedItems, state.offers);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      offers: state.offers,
    };
  } else if (action.type === "TOGGLE_OFFER") {
    const existingOfferIndex = state.offers.findIndex(
      (offer) => offer.id === action.payload.id
    );
    const updatedOffers = [...state.offers];
    updatedOffers[existingOfferIndex].active = action.payload.checked;

    const updatedTotalAmount = calculateTotalAmount(state.items, state.offers);

    return {
      items: state.items,
      offers: updatedOffers,
      totalAmount: updatedTotalAmount,
    };
  }

  return state;
};

const calculateTotalAmount = (items: CartItem[], offers: Offer[]) => {
  const totalAmount = items.reduce((amount, item) => {
    const itemOffer = offers.find((offer) => offer.itemID === item.fruit.id);

    if (!itemOffer || !itemOffer.active) {
      return amount + item.count * item.fruit.price;
    } else {
      const newAmount = itemOffer.activation(
        item.fruit.price,
        item.count * item.fruit.price
      );
      return amount + newAmount;
    }
  }, 0);

  return totalAmount;
};

const CartProvider: React.FunctionComponent<CartProviderProps> = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialCart);

  function addItem(item: CartItem) {
    dispatchCart({
      type: "ADD_ITEM",
      item,
    });
  }

  function removeItem(id: string) {
    dispatchCart({
      type: "REMOVE_ITEM",
      id,
    });
  }

  function toggleOffer(id: string, checked: boolean) {
    dispatchCart({
      type: "TOGGLE_OFFER",
      payload: {
        id,
        checked,
      },
    });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    offers: cartState.offers,
    addItem,
    removeItem,
    toggleOffer,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
