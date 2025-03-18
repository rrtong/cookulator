import { useState } from "react";
import SelectorButton from "./SelectorButton";
import "../styles/Selector.css";

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
      {/* <select value={ingredient} onChange={handleIngredient}>
        {dropdown}
      </select> */}
      {showSelector && (
        <div>
          <SelectorButton
            name={"butter"}
            setIngredient={setIngredient}
            setShowSelector={setShowSelector}
          />
          <SelectorButton
            name={"salt"}
            setIngredient={setIngredient}
            setShowSelector={setShowSelector}
          />
        </div>
      )}
    </div>
  );
};

export default Selector;
