import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import About from "./pages/About";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recruiter" element={<RecruiterDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
     <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;