import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/authPages/Login"
import SignUp from "./pages/authPages/Signup"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <SignUp /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App