import CardNav from "./components/CN/index";
import Surah from "./components/Surah/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="app">
      <Routes>
        <Route index element={<CardNav />} />
        <Route path="/:id" element={<Surah />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
