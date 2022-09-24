import CartButton from "../CartButton";
import LeoIcon from "../icons/LeoIcon";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-red-200 text-slate-900 flex justify-between items-center px-5 shadow-md z-10">
      <LeoIcon className="w-[128px] max-w-[50px]" />
      <CartButton />
    </header>
  );
};

export default Header;
