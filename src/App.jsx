import { useEffect } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import NewsContent from "./pages/NewsContent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/news" element={<NewsContent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
