import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Booking from "./components/Pages/Booking";
import About from "./components/About";

import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header></Header>
      <main className="relative">
        <Routes>
          <Route
            path="/Little-Lemon-Concept-Website"
            element={<Home />}
          ></Route>
          <Route
            path="/Little-Lemon-Concept-Website/booking"
            element={<Booking />}
          ></Route>
          <Route
            path="/Little-Lemon-Concept-Website/about"
            element={<About />}
          ></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
