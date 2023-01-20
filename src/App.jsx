import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavbarComponent";
import CategoryPage from "./pages/CategoryPage";
import FitPage from "./pages/FitPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fit/:slug" element={<FitPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default App;
