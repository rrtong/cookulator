import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Selector from "./components/Selector.tsx";
import Calculator from "./components/Calculator.tsx";
import { DROPDOWN, CONVERT } from "./constants/Constants.tsx";
import "./index.css";

function App() {
  const [ingredient, setIngredient] = useState("");
  const [showSelector, setShowSelector] = useState(true);

  return (
    <div className="app">
      <h1>Cookulator</h1>
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
