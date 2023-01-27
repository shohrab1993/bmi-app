import React, { useCallback, useEffect, useRef } from "react";
import BmiCatagory from "../components/BmiCatagory";
import { ContextBmi } from "../components/context/BmiContext";
import Header from "../components/Header";
import Input from "../components/Input";
import { resultHandleBmi } from "../lib/ComonFunction";
import { Container, Fieldset, Legend } from "../style/BmiCalculatorElements";

const BmiCalculator = () => {
  const { state, dispatch } = ContextBmi();
  const { weight, height, result } = state;
  const inputRef = useRef();

  const dispatchHandler = useCallback(
    () =>
      dispatch({
        type: "CHANGE_RESULT",
        value: resultHandleBmi(weight, height),
      }),
    [dispatch, weight, height]
  );

  useEffect(() => {
    dispatchHandler();
  }, [dispatchHandler]);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Container>
      <Header />
      <Fieldset>
        <Legend>BMI Calculator</Legend>
        <br /> <br />
        <Input
          ref={inputRef}
          titel="Enter Weight (in Kg)"
          value={weight}
          onChange={(e) =>
            dispatch({
              type: "CHANGE_WEIGHT",
              value: e.target.value,
            })
          }
        />
        <br />
        <Input
          titel="Enter Height (in cm)"
          value={height}
          onChange={(e) =>
            dispatch({
              type: "CHANGE_HEIGHT",
              value: e.target.value,
            })
          }
        />
        <br />
        <h2>Your BMI is :{result}</h2>
      </Fieldset>
      <BmiCatagory />
    </Container>
  );
};

export default BmiCalculator;
