import { useContext } from "react";
import CartContext, { CartItem } from "../../store/CartContext";
import Button from "../UI/Button";

interface CartItemProps {
  item: CartItem;
}

const CartListItem: React.FunctionComponent<CartItemProps> = ({ item }) => {
  const cartContext = useContext(CartContext);

  const itemOffers = cartContext.offers.filter(
    (offer) => offer.itemID === item.fruit.id
  );

  function addItem() {
    cartContext.addItem({
      fruit: item.fruit,
      count: 1,
    });
  }

  function removeItem() {
    cartContext.removeItem(item.fruit.id);
  }

  return (
    <li className="flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-2">
        <img
          src={item.fruit.imgSrc}
          alt={item.fruit.name}
          className="w-[75px] border-2 border-neutral-300 rounded"
        />
        <div className="flex flex-col">
          <span>{item.fruit.name}</span>
          {itemOffers.map((offer) => {
            return offer.active ? (
              <span key={offer.id} className="text-xs text-rose-500">
                Offer: {offer.name}
              </span>
            ) : null;
          })}
        </div>
      </div>
      <div className="flex justify-end items-center gap-3">
        <Button className="px-3 py-1" onClick={addItem}>
          +
        </Button>
        <span>{item.count}</span>
        <Button className="px-3 py-1" onClick={removeItem}>
          -
        </Button>
      </div>
    </li>
  );
};

export default CartListItem;
