import { useContext } from "react";
import CartContext from "../../store/CartContext";
import { Fruit } from "../../types/Fruit";
import Button from "../UI/Button";
import Card from "../UI/Card";

interface FruitItemProps {
  fruit: Fruit;
}

const FruitItem: React.FunctionComponent<FruitItemProps> = ({ fruit }) => {
  const cartContext = useContext(CartContext);

  const itemOffers = cartContext.offers.some(
    (offer) => offer.itemID === fruit.id && offer.active
  );

  function addItemHandler() {
    cartContext.addItem({
      fruit,
      count: 1,
    });
  }

  return (
    <Card>
      <div className="relative overflow-hidden">
        {itemOffers ? (
          <div className="absolute top-0 left-0 bg-rose-600 text-white p-2 text-center -rotate-45 origin-top-right -translate-x-[30%] before:absolute before:w-full before:h-full before:top-0 before:right-full before:bg-rose-600 after:absolute after:w-full after:h-full after:top-0 after:left-full after:bg-rose-600">
            Offer
          </div>
        ) : null}
        <img
          src={fruit.imgSrc}
          alt={fruit.name}
          className="w-[230px] mx-auto p-4"
        />
        <div className="border-t-2 border-t-neutral-300 p-4 flex justify-between items-center">
          <span className="text-lg font-semibold">{fruit.name}</span>
          <Button className="px-2 py-1" onClick={addItemHandler}>
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default FruitItem;
