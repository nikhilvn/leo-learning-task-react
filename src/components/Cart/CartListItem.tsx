import { useContext } from "react";
import CartContext, { CartItem } from "../../store/CartContext";
import Button from "../UI/Button";

interface CartItemProps {
  item: CartItem;
}

const CartListItem: React.FunctionComponent<CartItemProps> = ({ item }) => {
  const cartContext = useContext(CartContext);

  function addItem() {
    cartContext.add({
      fruit: item.fruit,
      amount: 1,
    });
  }

  function removeItem() {
    cartContext.remove(item.fruit.id);
  }

  return (
    <li className="flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-2">
        <img
          src={item.fruit.imgSrc}
          alt={item.fruit.name}
          className="w-[75px] border-2 border-neutral-300 rounded"
        />
        <span>{item.fruit.name}</span>
      </div>
      <div className="flex justify-end items-center gap-3">
        <Button className="px-3 py-1" onClick={addItem}>
          +
        </Button>
        <span>{item.amount}</span>
        <Button className="px-3 py-1" onClick={removeItem}>
          -
        </Button>
      </div>
    </li>
  );
};

export default CartListItem;
