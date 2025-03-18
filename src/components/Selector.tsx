import SelectorButton from "./SelectorButton";
import "../styles/Selector.css";
import butter from "../assets/buttonImages/butter.png";

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
  return (
    <div className="selector">
      {!showSelector && (
        <div className="selector-switch" onClick={() => setShowSelector(true)}>
          Switch Ingredient
        </div>
      )}
      {showSelector && (
        <div className="selector-buttons">
          <SelectorButton
            name={"butter"}
            image={butter}
            setIngredient={setIngredient}
            setShowSelector={setShowSelector}
          />
          <SelectorButton
            name={"salt"}
            image={butter}
            setIngredient={setIngredient}
            setShowSelector={setShowSelector}
          />
        </div>
      )}
    </div>
  );
};

export default Selector;
