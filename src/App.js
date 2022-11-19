import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Search from "./Components/Search";
import Forecaste from "./Components/Forecaste";
import { useState } from "react";
import About from "./Components/About";
import Contact from "./Components/contact";
import Login from "./Components/login";
import Register from "./Components/register";
import ProtectedRoutes from "./services/protectedRoute";



function App() {
 const [userStatus, setUserStatus] = useState(true);

 const logStatus = () => {
  setUserStatus(!userStatus);
}

  return (
    <div className="App">
      <Header userStatus={logStatus}/>
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="forecast/:name" element={<Forecaste />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="login" element={<Login logStatus={logStatus}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
