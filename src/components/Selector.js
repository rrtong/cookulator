import { React } from "react";
import "../styles/Selector.css";

const Selector = (props) => {
  return (
    <div className="selector">
      <select value={props.ingredient} onChange={props.handleIngredient}>
        <option value="">What ingredient?</option>
        <option value="butter">butter</option>
      </select>
    </div>
  );
};

export default Selector;
