import { React, useState, useEffect } from "react";

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

  useEffect(() => {
    if (fromValue) {
      handleToValue();
    }
  }, [fromValue, fromUnit, toUnit]);

  const handleFromUnit = (e) => {
    setFromUnit(e.target.value);
  };

  const handleToValue = () => {
    let convert = props.convert[fromUnit][toUnit];
    setToValue(convert(fromValue));
  };

  const handleToUnit = (e) => {
    setToUnit(e.target.value);
  };

  return (
    <div className="calculator">
      <div>
        <input
          value={fromValue}
          onChange={handleFromValue}
          disabled={fromUnit === "" || toUnit === ""}
        />
        <select value={fromUnit} onChange={handleFromUnit}>
          {props.dropdown}
        </select>
      </div>
      <div>
        <input value={toValue} disabled />
        <select value={toUnit} onChange={handleToUnit}>
          {props.dropdown}
        </select>
      </div>
    </div>
  );
};

export default Calculator;
