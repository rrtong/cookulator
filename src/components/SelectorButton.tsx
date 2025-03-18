import "../styles/SelectorButton.css";

interface SelectorButtonProps {
  name: string;
  setIngredient: (name: string) => void;
  setShowSelector: (bool: boolean) => void;
}

const SelectorButton: React.FC<SelectorButtonProps> = ({
  name,
  setIngredient,
  setShowSelector,
}) => {
  return (
    <div
      className="selector-button"
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
