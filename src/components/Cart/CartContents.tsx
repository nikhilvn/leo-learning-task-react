import { useContext } from "react";
import CartContext from "../../store/CartContext";
import formatPrice from "../../utils/formatPrice";
import CartList from "./CartList";

interface CartContentsProps {}

const CartContents: React.FunctionComponent<CartContentsProps> = () => {
  const cartContext = useContext(CartContext);

  return (
    <>
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
    </>
  );
};

export default CartContents;
