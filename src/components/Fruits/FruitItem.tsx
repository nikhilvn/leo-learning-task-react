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

  function addItemHandler() {
    cartContext.add({
      fruit,
      amount: 1,
    });
  }

  return (
    <Card>
      <div className="relative overflow-hidden">
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
