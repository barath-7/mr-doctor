import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginView from "./views/LoginView";
import Home from "./components/Home";
import RegisterationView from "./views/RegisterationView";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginView />} />
        <Route path="register" element={<RegisterationView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
