import { React } from "react";
import "../styles/Selector.css";

const Selector = (props) => {
  return (
    <div className="selector">
      <select value={props.ingredient} onChange={props.handleIngredient}>
        {props.dropdown}
      </select>
    </div>
  );
};

export default Selector;
