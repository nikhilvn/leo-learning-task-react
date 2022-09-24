import ReactDOM from "react-dom";
import CartContents from "./CartContents";

interface CartProps {
  onHideCart: () => void;
}

interface BackdropProps {
  onHideCart: () => void;
}

const Backdrop: React.FunctionComponent<BackdropProps> = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-20 bg-black/75"
      onClick={props.onHideCart}
    ></div>
  );
};

const ModalOverlay: React.FunctionComponent = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl z-30 shadow-card w-2/4">
      <CartContents />
    </div>
  );
};

const Cart: React.FunctionComponent<CartProps> = ({ onHideCart }) => {
  const portalEl = document.getElementById("dialog") as HTMLDivElement;

  const backdropPortal = ReactDOM.createPortal(
    <Backdrop onHideCart={onHideCart} />,
    portalEl
  );

  const modalOverlayPortal = ReactDOM.createPortal(<ModalOverlay />, portalEl);

  return (
    <>
      {backdropPortal}
      {modalOverlayPortal}
    </>
  );
};

export default Cart;
