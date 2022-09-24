import { useContext } from "react";
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal";
import Switch from "../UI/Switch";

interface OffersProps {
  onHideOffers: () => void;
}

const Offers: React.FunctionComponent<OffersProps> = ({ onHideOffers }) => {
  const cartContext = useContext(CartContext);

  function onOfferChange(id: string, checked: boolean) {
    cartContext.toggleOffer(id, checked);
  }

  return (
    <Modal onHideModal={onHideOffers}>
      <div className="p-6">
        <ul className="flex flex-col gap-4">
          {cartContext.offers.map((offer) => {
            return (
              <li key={offer.id} className="flex justify-between items-center">
                <div>{offer.name}</div>
                <Switch
                  onSwitchChange={(checked: boolean) =>
                    onOfferChange(offer.id, checked)
                  }
                  checked={offer.active}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Modal>
  );
};

export default Offers;
