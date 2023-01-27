import Header from "../components/Header";
import {
  AnimatatedDiv,
  Container,
  HomeImage,
} from "../style/BmiCalculatorElements";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <br />
        <h1>Welcome to BMI , BMR Calculator</h1>
        <AnimatatedDiv>
          <HomeImage src="images/bmr.png" alt="" />
        </AnimatatedDiv>
      </Container>
    </>
  );
}
