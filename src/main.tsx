import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Selector from "./components/Selector.tsx";
import Calculator from "./components/Calculator.tsx";
import { DROPDOWN, CONVERT } from "./constants/Constants.tsx";
import cookulator from "../public/cookulator.png";
import "./index.css";

function App() {
  const [ingredient, setIngredient] = useState("");
  const [showSelector, setShowSelector] = useState(true);

  return (
    <div className="app">
      <div className="title">
        <img className="logo" src={cookulator} />
        <h1>Cookulator</h1>
      </div>
      <Selector
        setIngredient={setIngredient}
        showSelector={showSelector}
        setShowSelector={setShowSelector}
      />
      {ingredient && !showSelector && (
        <Calculator
          dropdown={DROPDOWN[ingredient.toUpperCase()]}
          convert={CONVERT[ingredient.toUpperCase()]}
        />
      )}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
