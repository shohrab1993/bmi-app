import React, { useCallback, useEffect, useRef } from "react";
import Button from "../components/Button";
import { ContextBmi } from "../components/context/BmiContext";
import Header from "../components/Header";
import Input from "../components/Input";
import { resultHandleBmrMale } from "../lib/ComonFunction";
import {
  Container,
  Fieldset,
  Legend,
  RouterLink,
} from "../style/BmiCalculatorElements";

const BmrCalculator = () => {
  const { dispatch, state } = ContextBmi();
  const { bmrWeight, bmrHeight, bmrAge, bmrResult } = state;

  const inputRef = useRef();

  const dispatchHandler = useCallback(
    () =>
      dispatch({
        type: "BMR_RESULT",
        value: resultHandleBmrMale(bmrWeight, bmrHeight, bmrAge),
      }),
    [dispatch, bmrWeight, bmrHeight, bmrAge]
  );
  const refreshHandler = (e) => {
    window.location.reload(false);
    e.prevantDefault();
    dispatch({
      type: "REFRESH",
    });
  };
  useEffect(() => {
    dispatchHandler();
  }, [dispatchHandler]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  // useEffect(() => {
  //   refreshHandler();
  // }, [refreshHandler]);

  return (
    <Container>
      <Header />
      <br /> <br />
      {/* <h2>Calculate Male BMR</h2> */}
      <br />
      <RouterLink
        to="/femalebmr"
        className={((res) => (res.isActive ? "active" : ""), "female")}
      >
        Female
      </RouterLink>
      <form>
        <Fieldset>
          <Legend>BMR Calculator: MALE</Legend>
          <br /> <br />
          <Input
            ref={inputRef}
            titel="Enter Weight (in Kg)"
            value={bmrWeight}
            onChange={(e) =>
              dispatch({
                type: "BMR_WEIGHT",
                value: e.target.value,
              })
            }
          />
          <br />
          <Input
            titel="Enter Height (in cm)"
            value={bmrHeight}
            onChange={(e) =>
              dispatch({
                type: "BMR_HEIGHT",
                value: e.target.value,
              })
            }
          />
          <br />
          <Input
            titel="Enter Age (in year)"
            value={bmrAge}
            onChange={(e) =>
              dispatch({
                type: "BMR_AGE",
                value: e.target.value,
              })
            }
          />
          <br />
          <h2>Your BMR is :{bmrResult}</h2>
          <Button
            titel="Refresh"
            onClick={() =>
              dispatch({
                type: "REFRESH",
              })
            }
          />
        </Fieldset>
      </form>
    </Container>
  );
};

export default BmrCalculator;
