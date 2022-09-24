import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Fruits from "./components/Fruits/Fruits";
import Header from "./components/layout/Header";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Header openCart={() => setIsCartOpen(true)} />
      <Fruits />
      {isCartOpen && <Cart onHideCart={() => setIsCartOpen(false)} />}
    </CartProvider>
  );
}

export default App;
