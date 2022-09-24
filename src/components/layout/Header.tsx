import CartButton from "../Cart/CartButton";
import LeoIcon from "../icons/LeoIcon";

interface HeaderProps {
  openCart: () => void;
  openOffers: () => void;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  openCart,
  openOffers,
}) => {
  return (
    <header className="w-full h-20 bg-red-200 text-slate-900 px-5 shadow-md z-10 flex justify-between items-center">
      <div className="container flex justify-between items-center mx-auto">
        <LeoIcon className="w-[128px] max-w-[50px]" />
        <div className="flex justify-center items-center gap-9">
          <button
            className="text-lg font-semibold hover:text-rose-700"
            onClick={openOffers}
          >
            Offers
          </button>
          <CartButton onClick={openCart} />
        </div>
      </div>
    </header>
  );
};

export default Header;
