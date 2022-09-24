import CartButton from "../CartButton";
import LeoIcon from "../icons/LeoIcon";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header className="w-full h-20 bg-red-200 text-slate-900 px-5 shadow-md z-10 flex justify-between items-center">
      <div className="container flex justify-between items-center mx-auto">
        <LeoIcon className="w-[128px] max-w-[50px]" />
        <CartButton />
      </div>
    </header>
  );
};

export default Header;
