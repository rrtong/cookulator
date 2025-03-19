import SelectorButton from "./SelectorButton";
import "../styles/Selector.css";
import butter from "../assets/buttonImages/butter.png";
import { INGREDIENTS } from "../constants/Constants";

interface SelectorProps {
  setIngredient: (name: string) => void;
  showSelector: boolean;
  setShowSelector: (bool: boolean) => void;
}

const Selector: React.FC<SelectorProps> = ({
  setIngredient,
  showSelector,
  setShowSelector,
}) => {
  const selectorButtons = [];
  for (let ingredient of INGREDIENTS) {
    selectorButtons.push(
      <SelectorButton
        name={ingredient}
        image={butter}
        setIngredient={setIngredient}
        setShowSelector={setShowSelector}
      />
    );
  }

  return (
    <div className="selector">
      {!showSelector && (
        <div className="selector-switch" onClick={() => setShowSelector(true)}>
          Switch Ingredient
        </div>
      )}
      {showSelector && (
        <div className="selector-buttons">{selectorButtons}</div>
      )}
    </div>
  );
};

export default Selector;
