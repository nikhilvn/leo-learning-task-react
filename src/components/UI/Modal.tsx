import ReactDOM from "react-dom";

interface ModalProps {
  children?: React.ReactNode;
  onHideModal: () => void;
}

interface ModalOverlayProps {
  children?: React.ReactNode;
}

interface BackdropProps {
  onHideModal: () => void;
}

const Backdrop: React.FunctionComponent<BackdropProps> = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-20 bg-black/75"
      onClick={props.onHideModal}
    ></div>
  );
};

const ModalOverlay: React.FunctionComponent<ModalOverlayProps> = ({
  children,
}) => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl z-30 shadow-card w-2/4">
      {children}
    </div>
  );
};

const Modal: React.FunctionComponent<ModalProps> = ({
  onHideModal,
  children,
}) => {
  const portalEl = document.getElementById("dialog") as HTMLDivElement;

  const backdropPortal = ReactDOM.createPortal(
    <Backdrop onHideModal={onHideModal} />,
    portalEl
  );

  const modalOverlayPortal = ReactDOM.createPortal(
    <ModalOverlay>{children}</ModalOverlay>,
    portalEl
  );

  return (
    <>
      {backdropPortal}
      {modalOverlayPortal}
    </>
  );
};

export default Modal;
