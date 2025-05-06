import "../styles/SelectorButton.css";
import React from "react";

interface SelectorButtonProps {
  name: string;
  image: string;
  backgroundColor: string;
  setIngredient: (name: string) => void;
  setShowSelector: (bool: boolean) => void;
}

const SelectorButton: React.FC<SelectorButtonProps> = ({
  name,
  image,
  backgroundColor,
  setIngredient,
  setShowSelector,
}) => {
  return (
    <div
      className="selector-button"
      style={
        {
          backgroundImage: `url(${image})`,
          "--hover-color": backgroundColor,
        } as React.CSSProperties
      }
      onClick={() => {
        setIngredient(name);
        setShowSelector(false);
      }}
    >
      {name}
    </div>
  );
};

export default SelectorButton;
