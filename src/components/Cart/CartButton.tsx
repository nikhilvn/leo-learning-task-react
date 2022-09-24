import { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "../icons/CartIcon";
import Button from "../UI/Button";

interface CartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CartButton: React.FunctionComponent<CartButtonProps> = (props) => {
  const cartContext = useContext(CartContext);

  const cartItemsCount = cartContext.items.reduce((count, item) => {
    return count + item.amount;
  }, 0);

  return (
    <Button {...props} className="relative p-3">
      <span className="w-[1.35rem] h-[1.35rem]">
        <CartIcon />
      </span>
      {cartItemsCount > 0 ? (
        <div className="absolute -top-3 -right-3 bg-white rounded-full w-7 h-7 flex justify-center items-center">
          {cartItemsCount}
        </div>
      ) : null}
    </Button>
  );
};

export default CartButton;
