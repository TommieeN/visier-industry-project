import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import ChartsPage from "./pages/ChartsPage/ChartsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      {/* we need a ternary operator to say if url is /welcome, do not show navbar */}
      <Routes>
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
