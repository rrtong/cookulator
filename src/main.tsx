import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Selector from "./components/Selector.tsx";
import Calculator from "./components/Calculator.tsx";
import { DROPDOWN, CONVERT } from "./constants/Constants.tsx";
import "./index.css";

function App() {
  const [ingredient, setIngredient] = useState("");

  const handleIngredient = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
