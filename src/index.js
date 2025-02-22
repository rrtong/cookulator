import { React, useState } from "react";
import ReactDOM from "react-dom/client";
import Calculator from "./components/Calculator";
import { DROPDOWN, CONVERT } from "./constants/Constants";
import "./index.css";

function App() {
  const [ingredient, setIngredient] = useState("");

  const handleIngredient = (e) => {
    setIngredient(e.target.value);
  };

  return (
    <div className="app">
      <h1>cookulator</h1>
      <select value={ingredient} onChange={handleIngredient}>
        <option value="">What ingredient?</option>
        <option value="butter">butter</option>
      </select>
      {ingredient && (
        <Calculator
          dropdown={DROPDOWN[ingredient.toUpperCase()]}
          convert={CONVERT[ingredient.toUpperCase()]}
        />
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
