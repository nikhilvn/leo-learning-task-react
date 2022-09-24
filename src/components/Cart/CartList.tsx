import { CartItem } from "../../store/CartContext";
import CartListItem from "./CartListItem";

interface CartListProps {
  items: CartItem[];
}

const CartList: React.FunctionComponent<CartListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((i) => {
        return <CartListItem item={i} key={i.fruit.id} />;
      })}
    </ul>
  );
};

export default CartList;
