import { React, useState } from "react";
import ReactDOM from "react-dom/client";
import Selector from "./components/Selector";
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
      <h1>Cookulator</h1>
      <Selector
        ingredient={ingredient}
        handleIngredient={handleIngredient}
        dropdown={DROPDOWN["SELECTOR"]}
      />
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
