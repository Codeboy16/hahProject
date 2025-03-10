import React,{useState} from "react";
import { BrowserRouter, Routes,Route,Router,Navigate } from "react-router-dom";
import  Login  from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/main";
import Poc from "./pages/Poc";
import EmployerDashboard from "./pages/EmployerDashboard";
import Error from "./pages/Error";
import Vendor from "./pages/Vendor/Vendor";
import Search from "./pages/Search";
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
      <Route path="/employee" element={<EmployerDashboard/>}></Route>
      <Route path="/poc" element={<Poc/>}></Route>
      <Route path="/vendor/*" element={<Vendor/>}></Route>
      <Route path="/search/*" element={<Search/>}></Route>
      <Route path="/*" element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
