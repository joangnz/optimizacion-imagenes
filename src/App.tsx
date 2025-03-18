import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Ex1 from "./components/Exercises/Ex1";
import Ex2 from "./components/Exercises/Ex2";
import Ex3 from "./components/Exercises/Ex3";
import Ex4 from "./components/Exercises/Ex4";
import Ex5 from "./components/Exercises/Ex5";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ex1" element={<Ex1 />} />
          <Route path="/ex2" element={<Ex2 />} />
          <Route path="/ex3" element={<Ex3 />} />
          <Route path="/ex4" element={<Ex4 />} />
          <Route path="/ex5" element={<Ex5 />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
export default App;