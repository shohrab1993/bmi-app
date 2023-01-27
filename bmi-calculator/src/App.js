import { BrowserRouter, Route, Routes } from "react-router-dom";
import BmiCalculator from "./pages/BmiCalculator";
import BmrCalculator from "./pages/BmrCalculator";
import FemaleBmr from "./pages/FemaleBmr";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/GlobalElements";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="bmicalculator" element={<BmiCalculator />} />
          <Route path="bmrcalculator" element={<BmrCalculator />} />
          <Route path="femalebmr" element={<FemaleBmr />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
