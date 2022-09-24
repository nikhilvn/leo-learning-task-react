import CartIcon from "./icons/CartIcon";

interface CartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CartButton: React.FunctionComponent<CartButtonProps> = (props) => {
  return (
    <button
      {...props}
      className="cursor-pointer bg-rose-400 p-3 flex justify-around items-center rounded font-semibold transition-all hover:ring hover:ring-rose-500 active:ring active:ring-rose-500"
    >
      <span className="w-[1.35rem] h-[1.35rem]">
        <CartIcon />
      </span>
    </button>
  );
};

export default CartButton;
