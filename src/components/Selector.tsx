import SelectorButton from "./SelectorButton";
import "../styles/Selector.css";
import {
  INGREDIENTS,
  INGREDIENTS_COLOR,
  INGREDIENTS_ICON,
} from "../constants/Constants";

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
  for (let ingredient in INGREDIENTS) {
    selectorButtons.push(
      <SelectorButton
        name={INGREDIENTS[ingredient]}
        image={INGREDIENTS_ICON[ingredient]}
        backgroundColor={INGREDIENTS_COLOR[ingredient]}
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
