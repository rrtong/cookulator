import "../styles/SelectorButton.css";

interface SelectorButtonProps {
  name: string;
  image: string;
  setIngredient: (name: string) => void;
  setShowSelector: (bool: boolean) => void;
}

const SelectorButton: React.FC<SelectorButtonProps> = ({
  name,
  image,
  setIngredient,
  setShowSelector,
}) => {
  return (
    <div
      className="selector-button"
      style={{ backgroundImage: `url(${image}` }}
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
