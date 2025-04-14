import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import AboutUs from "./components/pages/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
