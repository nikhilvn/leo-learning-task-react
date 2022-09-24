import { Fruit } from "../../types/Fruit";
import Button from "../UI/Button";
import Card from "../UI/Card";

interface FruitItemProps {
  fruit: Fruit;
}

const FruitItem: React.FunctionComponent<FruitItemProps> = ({ fruit }) => {
  return (
    <Card>
      <img
        src={fruit.imgSrc}
        alt={fruit.name}
        className="w-[230px] mx-auto p-4"
      />
      <div className="border-t-2 border-t-neutral-300 p-4 flex justify-between items-center">
        <span className="text-lg font-semibold">{fruit.name}</span>
        <Button className="px-2 py-1">Add to Cart</Button>
      </div>
    </Card>
  );
};

export default FruitItem;
