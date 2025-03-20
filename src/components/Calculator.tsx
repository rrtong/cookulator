import { useState, useEffect, JSX } from "react";
import "../styles/Calculator.css";
import { ToUnitConversion, FromUnitConversion } from "../constants/Constants";

interface CalculatorProps {
  ingredient: string;
  convert: Record<string, ToUnitConversion> | FromUnitConversion;
  dropdown: JSX.Element;
  dropdownType: JSX.Element;
}

const Calculator: React.FC<CalculatorProps> = ({
  ingredient,
  convert,
  dropdown,
  dropdownType,
}) => {
  const [ingredientType, setIngredientType] = useState("");
  const [fromValue, setFromValue] = useState(0);
  const [fromUnit, setFromUnit] = useState("");
  const [toValue, setToValue] = useState(0);
  const [toUnit, setToUnit] = useState("");

  const handleFromValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9]*\.?[0-9]*$/;
    if (regex.test(e.target.value)) {
      setFromValue(Number(e.target.value));
    }
  };

  // auto-select first ingredientType from dropdownType list
  useEffect(() => {
    if (dropdownType) {
      setIngredientType(dropdownType.props.children[0].props.value);
    }
  }, [dropdownType]);

  // auto-select first two units from dropdown list
  useEffect(() => {
    if (dropdown.props.children.length > 1) {
      setFromUnit(dropdown?.props.children[0].props.value);
      setToUnit(dropdown?.props.children[1].props.value);
    }
  }, [dropdown]);

  // calculation when user input changes
  useEffect(() => {
    const handleToValue = () => {
      let convertCalc = convert[fromUnit][toUnit];
      if (typeof convertCalc === "function") {
        setToValue(convertCalc(fromValue, ingredientType));
      } else {
        console.error("convertCalc is not a function");
      }
    };

    if (fromValue) {
      handleToValue();
    } else if (fromValue === 0 && fromUnit && toUnit) {
      handleToValue();
    }
  }, [ingredientType, fromValue, fromUnit, toUnit]);

  const handleIngredientType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIngredientType(e.target.value);
  };

  const handleFromUnit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromUnit(e.target.value);
  };

  const handleToUnit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToUnit(e.target.value);
  };

  return (
    <div className="calculator">
      {dropdownType && (
        <div>
          type of {ingredient}
          <select
            value={ingredientType}
            onChange={handleIngredientType}
            disabled
          >
            {dropdownType}
          </select>
        </div>
      )}
      <div className="from">
        converts from
        <input
          value={fromValue}
          onChange={handleFromValue}
          disabled={fromUnit === "" || toUnit === ""}
          placeholder="Enter number"
        />
        <select value={fromUnit} onChange={handleFromUnit}>
          {dropdown}
        </select>
      </div>
      <div className="to">
        converts to
        <input value={toValue} disabled />
        <select value={toUnit} onChange={handleToUnit}>
          {dropdown}
        </select>
      </div>
    </div>
  );
};

export default Calculator;
