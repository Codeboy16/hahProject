import React,{useState} from "react";
import { BrowserRouter, Routes,Route,Router,Navigate } from "react-router-dom";
import  Login  from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/main";
import Employee from "./pages/EmployerDashboard";
import Poc from "./pages/Poc";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}></Route>
      <Route path="/login" element={<Login login={login}/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/employee" element={isAuthenticated ? <Employee logout={logout} /> : <Navigate to="/login" />}></Route>
      <Route path="/poc" element={<Poc/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
