import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ThankYou from "./pages/ThankYou/ThankYou";
import LandingPage from "./pages/LandingPage/LandingPage";
import ChartsPage from "./pages/ChartsPage/ChartsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ScrollBar from "./components/ScrollBar/ScrollBar";
function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      {/* we need a ternary operator to say if url is /welcome, do not show navbar */}
      <Routes>
        <Route path="/welcome" element={<ThankYou />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/charts" element={<ChartsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
