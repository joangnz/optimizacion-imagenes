import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";

const Home = lazy(() => import("./components/Home"));
const Ex1 = lazy(() => import("./components/Exercises/Ex1"));
const Ex2 = lazy(() => import("./components/Exercises/Ex2"));
const Ex3 = lazy(() => import("./components/Exercises/Ex3"));
const Ex4 = lazy(() => import("./components/Exercises/Ex4"));
// const Ex5 = lazy(() => import("./components/Exercises/Ex5"));

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4 bg-white dark:bg-gray-900 min-h-screen text-gray900 dark:text-gray-100">
        <ThemeToggle />
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ex1" element={<Ex1 />} />
            <Route path="/ex2" element={<Ex2 />} />
            <Route path="/ex3" element={<Ex3 />} />
            <Route path="/ex4" element={<Ex4 />} />
            {/* <Route path="/ex5" element={<Ex5 />} /> */}
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
}

export default App;