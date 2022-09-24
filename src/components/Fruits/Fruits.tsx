import { Fruit } from "../../types/Fruit";
import FruitsList from "./FruitsList";

import appleImg from "../../assets/images/apple.jpg";
import orangeImg from "../../assets/images/orange.jpg";

interface FruitsProps {}

const DUMMY_FRUITS: Fruit[] = [
  {
    id: "f1",
    name: "Apple",
    price: 60,
    imgSrc: appleImg,
  },
  {
    id: "f2",
    name: "Orange",
    price: 25,
    imgSrc: orangeImg,
  },
];

const Fruits: React.FunctionComponent<FruitsProps> = () => {
  return (
    <main className="container mx-auto my-5">
      <FruitsList fruits={DUMMY_FRUITS} />
    </main>
  );
};

export default Fruits;
