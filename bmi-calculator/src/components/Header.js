import React from "react";
import {
  Container,
  MainHeader,
  RouterLink,
  WrapperManu,
} from "../style/BmiCalculatorElements";

const Header = () => {
  return (
    <Container>
      <MainHeader>
        <WrapperManu>
          <RouterLink
            to="/"
            className={(res) => (res.isActive ? "active" : "")}
          >
            Home
          </RouterLink>
          <RouterLink
            to="/bmicalculator"
            className={(res) => (res.isActive ? "active" : "")}
          >
            BMI
          </RouterLink>
          <RouterLink
            to="/bmrcalculator"
            className={(res) => (res.isActive ? "active" : "")}
          >
            BMR
          </RouterLink>
        </WrapperManu>
      </MainHeader>
    </Container>
  );
};

export default Header;
