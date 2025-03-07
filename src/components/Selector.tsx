import { ReactNode } from "react";
import "../styles/Selector.css";

interface SelectorProps {
  ingredient: string;
  handleIngredient: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  dropdown: ReactNode;
}

const Selector: React.FC<SelectorProps> = ({
  ingredient,
  handleIngredient,
  dropdown,
}) => {
  return (
    <div className="selector">
      <select value={ingredient} onChange={handleIngredient}>
        {dropdown}
      </select>
    </div>
  );
};

export default Selector;
