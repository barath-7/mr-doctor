import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LoginView from "./views/LoginView";
import Home from "./views/Home";
import RegisterationView from "./views/RegisterationView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginView />} />
        <Route path="register" element={<RegisterationView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
