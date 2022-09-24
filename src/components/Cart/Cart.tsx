import { useContext } from "react";
import CartContext from "../../store/CartContext";
import formatPrice from "../../utils/formatPrice";
import Modal from "../UI/Modal";
import CartList from "./CartList";

interface CartProps {
  onHideCart: () => void;
}

const Cart: React.FunctionComponent<CartProps> = ({ onHideCart }) => {
  const cartContext = useContext(CartContext);

  return (
    <Modal onHideModal={onHideCart}>
      {cartContext.items.length > 0 ? (
        <div>
          <CartList items={cartContext.items} />
          <div className="border-t-2 border-t-neutral-300 p-6 flex justify-between items-center">
            <span className="text-lg">Total Amount:</span>
            <span className="text-lg font-semibold">
              {formatPrice(cartContext.totalAmount)}
            </span>
          </div>
        </div>
      ) : (
        <div className="p-6 text-lg font-semibold">No items in the cart</div>
      )}
    </Modal>
  );
};

export default Cart;
