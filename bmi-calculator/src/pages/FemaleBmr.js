import React, { useCallback, useEffect, useRef } from "react";
import { ContextBmi } from "../components/context/BmiContext";
import Header from "../components/Header";
import Input from "../components/Input";
import { resultHandlerBmiFemale } from "../lib/ComonFunction";
import {
  Container,
  Fieldset,
  Legend,
  RouterLink,
} from "../style/BmiCalculatorElements";

const FemaleBmr = () => {
  const { state, dispatch } = ContextBmi();
  const { fBmrWeight, fBmrHeight, fBmrAge, fBmrResult } = state;
  const inputRef = useRef();

  const dispatchHandler = useCallback(() => {
    dispatch({
      type: "F_BMR_RESULT",
      value: resultHandlerBmiFemale(fBmrWeight, fBmrHeight, fBmrAge),
    });
  }, [dispatch, fBmrWeight, fBmrHeight, fBmrAge]);

  useEffect(() => {
    dispatchHandler();
  }, [dispatchHandler]);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <Container>
        <Header />
        <br /> <br />
        {/* <h2>Calculate Female BMR</h2> */}
        <br />
        <RouterLink
          to="/bmrcalculator"
          className={((res) => (res.isActive ? "active" : ""), "female")}
        >
          Male
        </RouterLink>
        <form>
          <Fieldset>
            <Legend>BMR Calculator: FEMAMLE</Legend>
            <br /> <br />
            <Input
              ref={inputRef}
              titel="Enter Weight (in Kg)"
              value={fBmrWeight}
              onChange={(e) => {
                dispatch({
                  type: "F_BMR_WEIGHT",
                  value: e.target.value,
                });
              }}
            />
            <br />
            <Input
              titel="Enter Height (in cm)"
              value={fBmrHeight}
              onChange={(e) => {
                dispatch({
                  type: "F_BMR_HEIGHT",
                  value: e.target.value,
                });
              }}
            />
            <br />
            <Input
              titel="Enter Age (in year)"
              value={fBmrAge}
              onChange={(e) => {
                dispatch({
                  type: "F_BMR_AGE",
                  value: e.target.value,
                });
              }}
            />
            <br />
            <h2>Your BMR is :{fBmrResult}</h2>
          </Fieldset>
        </form>
      </Container>
    </>
  );
};

export default FemaleBmr;
