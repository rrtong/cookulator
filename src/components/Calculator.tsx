import { useState, useEffect, JSX } from "react";
import "../styles/Calculator.css";
import { UnitConversions } from "../constants/Constants";

interface CalculatorProps {
  dropdown: JSX.Element;
  convert: Record<string, UnitConversions>;
}

const Calculator: React.FC<CalculatorProps> = ({ dropdown, convert }) => {
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
      setToValue(convertCalc(fromValue));
    };

    if (fromValue) {
      handleToValue();
    } else if (fromValue === 0 && fromUnit && toUnit) {
      handleToValue();
    }
  }, [fromValue, fromUnit, toUnit]);

  const handleFromUnit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromUnit(e.target.value);
  };

  const handleToUnit = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToUnit(e.target.value);
  };

  return (
    <div className="calculator">
      <div className="from">
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
      converts to
      <div className="to">
        <input value={toValue} disabled />
        <select value={toUnit} onChange={handleToUnit}>
          {dropdown}
        </select>
      </div>
    </div>
  );
};

export default Calculator;
