import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/authPages/Login";
import SignUp from "./pages/authPages/Signup";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Case from "./modules/case";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />}/>
          <Route path="/cases" element={<Case />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
