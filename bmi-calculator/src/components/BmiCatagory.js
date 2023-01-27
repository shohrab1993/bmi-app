import React from "react";
import styled from "styled-components";
import { ContextBmi } from "./context/BmiContext";

const Image = styled.img`
  width: 200px;
  height: 350px;
`;
const BmiCatagory = () => {
  const { state } = ContextBmi();
  const { result } = state;

  const BmiCondition = () => {
    if (result > 40) {
      return <Image src="images/extemly-obase.jpg" alt="" />;
    } else if (result > 29) {
      return <Image src="images/image2.jpg" alt="" />;
    } else if (result > 25) {
      return <Image src="images/image3.jpg" alt="" />;
    } else if (result >= 18.5) {
      return <Image src="images/image4.jpg" alt="" />;
    } else if (result < 18 && result > 0) {
      return <Image src="images/image5.jpg" alt="" />;
    } else {
      return "";
    }
  };
  return (
    <>
      <BmiCondition />
    </>
  );
};

export default BmiCatagory;
