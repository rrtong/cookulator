import { React, useState, useEffect } from "react";
import "../styles/Calculator.css";

const Calculator = (props) => {
  const [fromValue, setFromValue] = useState("");
  const [fromUnit, setFromUnit] = useState("");
  const [toValue, setToValue] = useState("");
  const [toUnit, setToUnit] = useState("");

  const handleFromValue = (e) => {
    const regex = /^[0-9]*\.?[0-9]*$/;
    if (regex.test(e.target.value)) {
      setFromValue(e.target.value);
    }
  };

  // auto-select first two units from dropdown list
  useEffect(() => {
    if (props.dropdown.props.children.length > 1) {
      setFromUnit(props.dropdown.props.children[0].props.value);
      setToUnit(props.dropdown.props.children[1].props.value);
    }
  }, [props.dropdown]);

  // calculation when user input changes
  useEffect(() => {
    const handleToValue = () => {
      let convert = props.convert[fromUnit][toUnit];
      setToValue(convert(fromValue));
    };

    if (fromValue) {
      handleToValue();
    } else if (fromValue === "" && fromUnit && toUnit) {
      handleToValue("");
    }
  }, [fromValue, fromUnit, toUnit]);

  const handleFromUnit = (e) => {
    setFromUnit(e.target.value);
  };

  const handleToUnit = (e) => {
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
          {props.dropdown}
        </select>
      </div>
      converts to
      <div className="to">
        <input value={toValue} disabled />
        <select value={toUnit} onChange={handleToUnit}>
          {props.dropdown}
        </select>
      </div>
    </div>
  );
};

export default Calculator;
