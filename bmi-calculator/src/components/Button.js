import React from "react";
import { Refresh } from "../style/BmiCalculatorElements";

const Button = ({ onClick, titel }) => {
  return (
    <div>
      <Refresh onClick={onClick}>{titel}</Refresh>
    </div>
  );
};

export default Button;
