import CartIcon from "./icons/CartIcon";
import Button from "./UI/Button";

interface CartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CartButton: React.FunctionComponent<CartButtonProps> = (props) => {
  return (
    <Button {...props} className="p-3">
      <span className="w-[1.35rem] h-[1.35rem]">
        <CartIcon />
      </span>
    </Button>
  );
};

export default CartButton;
