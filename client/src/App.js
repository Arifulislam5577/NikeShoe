import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Order from "./components/Pages/Order";
import Signup from "./components/Pages/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/plan/:id" element={<Order />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
