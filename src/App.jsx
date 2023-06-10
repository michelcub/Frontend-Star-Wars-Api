import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";

import { Home } from "./views/Home";
import { Details } from "./views/Details";
import { NotFound } from "./views/NotFound";

function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
