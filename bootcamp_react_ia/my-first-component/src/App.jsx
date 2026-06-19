import "./App.css";
import { Recipe } from "./components/Recipe";
import IcedCaramelImage from "./assets/recipes/iced-caramel.png";
import CafeMochaImage from "./assets/recipes/caffe-mocha.png";
import { Coffee } from "./components/Coffee";
import { v4 as uuidv4 } from "uuid";

const coffees = [
  {
    id: uuidv4(),
    imageSrc: IcedCaramelImage,
    onClick: () => alert("Você clicou na receita de Iced Caramel!"),
    coffee: {
      name: "Iced Caramel",
      description:
        "A delicious iced caramel drink that combines the rich flavors of caramel with the refreshing chill of ice. Perfect for a hot day or as a sweet treat any time.",
      preparationTime: "5 minutes",
    },
  },
  {
    id: uuidv4(),
    imageSrc: CafeMochaImage,
    coffee: {
      name: "Caffe Mocha",
      description:
        "A delightful blend of espresso, steamed milk, and rich chocolate flavor. Topped with whipped cream for an extra indulgent touch.",
      preparationTime: "10 minutes",
    },
  },
  {
    id: uuidv4(),
    imageSrc: CafeMochaImage,
    coffee: {
      name: "Caffe Mocha",
      description:
        "A delightful blend of espresso, steamed milk, and rich chocolate flavor. Topped with whipped cream for an extra indulgent touch.",
      preparationTime: "10 minutes",
    },
  },
  {
    id: uuidv4(),
    imageSrc: CafeMochaImage,
    coffee: {
      name: "Caffe Mocha",
      description:
        "A delightful blend of espresso, steamed milk, and rich chocolate flavor. Topped with whipped cream for an extra indulgent touch.",
      preparationTime: "10 minutes",
    },
  },
];

function App() {
  return (
    <>
      <h1 className="title">Receitas Starbucks</h1>
      <div className="recipe-list">
        {coffees.map(({ id, imageSrc, onClick, coffee }) => (
          <Recipe key={id} onClick={onClick}>
            <Coffee imageSrc={imageSrc} coffee={coffee} />
          </Recipe>
        ))}
      </div>
    </>
  );
}

export default App;
