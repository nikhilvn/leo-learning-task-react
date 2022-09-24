import { Fruit } from "../../types/Fruit";
import FruitItem from "./FruitItem";

interface FruitsListProps {
  fruits: Fruit[];
}

const FruitsList: React.FunctionComponent<FruitsListProps> = ({ fruits }) => {
  return (
    <ul className="grid grid-cols-2 gap-10">
      {fruits.map((fruit) => {
        return <FruitItem fruit={fruit} />;
      })}
    </ul>
  );
};

export default FruitsList;
