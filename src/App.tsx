import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CarDetailsPage from "./pages/CarDetailsPage";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/car/:carId" element={<CarDetailsPage />} />
        <Route path="/pages/register" element={<RegisterPage />} />

      </Routes>
    </Router>
  );
}

export default App;
