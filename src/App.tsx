import "./App.css";
import Fruits from "./components/Fruits/Fruits";
import Header from "./components/layout/Header";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <Fruits />
    </CartProvider>
  );
}

export default App;
