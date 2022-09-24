import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Fruits from "./components/Fruits/Fruits";
import Header from "./components/layout/Header";
import Offers from "./components/Offers/Offers";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOffersOpen, setIsOffersOpen] = useState(false);

  return (
    <CartProvider>
      <Header
        openCart={() => setIsCartOpen(true)}
        openOffers={() => setIsOffersOpen(true)}
      />
      <Fruits />
      {isCartOpen && <Cart onHideCart={() => setIsCartOpen(false)} />}
      {isOffersOpen && <Offers onHideOffers={() => setIsOffersOpen(false)} />}
    </CartProvider>
  );
}

export default App;
