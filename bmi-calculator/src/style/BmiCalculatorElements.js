import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Common Syleing
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const RouterLink = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  color: #000;
  padding: 8px;
  border-radius: 3px;

  &:hover {
    color: #fff;
    background-color: #31906e;
    opacity: 0.9;
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
  &.active {
    color: #fff;
    background-color: #31906e;
    opacity: 0.9;
  }
  &.female {
    color: #fff;
    background-color: #31906e;
    opacity: 0.9;
  }
`;
// Style for BmiCalculator and BmrCalculator
export const Legend = styled.legend`
  font-size: 30px;
`;
export const Fieldset = styled.fieldset`
  margin-top: 50px;
  margin-bottom: 50px;
`;
//Style for Header Component

export const MainHeader = styled.div`
  height: 60px;
  width: 100%;
  background-color: #cacfd2;
`;
export const WrapperManu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  width: 50%;
  height: 60px;
`;

//Style for Refresh Button

export const Refresh = styled.button`
  cursor: pointer;
  padding: 5px;
`;
// Style for Home Component

export const AnimatatedDiv = styled.div`
  position: relative;
  animation-name: animated_div;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @keyframes animated_div {
    0% {
      top: 0px;
      bottom: 100px;
    }
    100% {
      top: 100px;
      bottom: 0px;
    }
  }
`;
export const HomeImage = styled.img`
  width: 700px;
  height: 400px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
